import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (per IP, resets on deploy)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Sanitize user input to prevent XSS in email HTML
function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Max field lengths
const MAX_NAME = 100;
const MAX_EMPRESA = 150;
const MAX_EMAIL = 254;
const MAX_TELEFONO = 30;
const MAX_DESCRIPCION = 2000;

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();

    // Honeypot — if this hidden field has a value, it's a bot
    if (data?.website) {
      return NextResponse.json({ success: true }); // fake success
    }

    const nombre = String(data?.nombre ?? "").trim().slice(0, MAX_NAME);
    const empresa = String(data?.empresa ?? "").trim().slice(0, MAX_EMPRESA);
    const email = String(data?.email ?? "").trim().slice(0, MAX_EMAIL);
    const telefono = String(data?.telefono ?? "").trim().slice(0, MAX_TELEFONO);
    const descripcion = String(data?.descripcion ?? "").trim().slice(0, MAX_DESCRIPCION);

    if (!nombre || !empresa || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Formulario Livio <hola@liviogistics.com>",
      to: ["t.fuentealba@liviogistics.com", "t.escalante@liviogistics.com"],
      replyTo: email,
      subject: `Nuevo contacto piloto: ${sanitize(nombre)} — ${sanitize(empresa)}`,
      html: `
        <h2>Nueva solicitud de piloto</h2>
        <p><strong>Nombre:</strong> ${sanitize(nombre)}</p>
        <p><strong>Empresa:</strong> ${sanitize(empresa)}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Teléfono / WhatsApp:</strong> ${sanitize(telefono) || "No proporcionado"}</p>
        <p><strong>Operación actual:</strong> ${sanitize(descripcion) || "No proporcionado"}</p>
        <hr />
        <p style="color: #888; font-size: 12px;">Enviado desde el formulario de contacto de livio.cl</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
