import { ImageResponse } from "next/og";

export const alt = "Autodidack | Home";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Autodidack | Home
      </div>
    ),
    {
      ...size,
    }
  );
}
