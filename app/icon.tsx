import { ImageResponse } from "next/og";

// Favicon: a deep-forest tile with a "T" wordmark stand-in (no logo yet).
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1f3d32",
        color: "#faf9f6",
        fontSize: 22,
        fontWeight: 700,
        fontFamily: "sans-serif",
        borderRadius: 6,
      }}
    >
      T
    </div>,
    { ...size }
  );
}
