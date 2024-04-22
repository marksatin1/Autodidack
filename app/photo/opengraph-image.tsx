import { ImageResponse } from "next/og";

export const alt = "Autodidack | Photo";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 692,
};

export default async function Image() {
  return (
    new ImageResponse(<img src="/pages/photo" width={size.width} height={size.height} alt={alt} />),
    { ...size }
  );
}
