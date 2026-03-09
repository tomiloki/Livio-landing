import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LIVIO - La operación logística de tu pyme, en orden";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#F8FAFC",
          backgroundImage:
            "radial-gradient(circle at top right, rgba(14, 116, 144, 0.12), transparent 60%), radial-gradient(circle at bottom left, rgba(15, 23, 42, 0.08), transparent 55%)",
          color: "#0F172A",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#0F172A",
            marginBottom: 24,
          }}
        >
          LIVIO
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            maxWidth: 860,
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          La operación logística de tu pyme, en orden
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            maxWidth: 860,
            color: "#334155",
            lineHeight: 1.4,
          }}
        >
          Centraliza pedidos, asigna entregas, da seguimiento, registra evidencia y cierra el día con control.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
