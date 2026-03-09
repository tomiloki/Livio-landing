import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const nombre = String(data?.nombre ?? "").trim();
    const empresa = String(data?.empresa ?? "").trim();
    const email = String(data?.email ?? "").trim();

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
    
    // TODO: Implement actual email sending or webhook integration
    console.log("Contact form submission:", {
      ...data,
      nombre,
      empresa,
      email,
    });
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
