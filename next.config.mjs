/** @type {import('next').NextConfig} */
const nextConfig = {
  // theme: {
  //   screens: {
  //     phoneSE: "375px",
  //     // iPhone SE - Vertical

  //     phoneProMax: "430px",
  //     // iPhone 14 Pro Max - Vertical

  //     ipadAirV: "820",
  //     // iPad Air - Vertical

  //     iPadAirH: "1180",
  //     // iPad Air - Horizontal

  //     iPadProV: "1024px",
  //     // iPad Pro - Vertical

  //     iPadProH: "1366px",
  //     // iPad Pro - Horizontal

  //     laptop: "1792",
  //     // My laptop - Horizontal
  //   },
  // },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "awopcddbmkrqgimcqlmt.supabase.co",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
