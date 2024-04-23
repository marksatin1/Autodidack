import { ImageResponse } from "next/og";

export const alt = "Autodidack | Entrance";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 690,
};

export default async function Image({ params }: { params: { name: string } }) {
  return (
    new ImageResponse(
      <img src="/pages/entrance.png" width={size.width} height={size.height} alt={alt} />
    ),
    { ...size }
  );
}
