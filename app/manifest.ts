import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FitNest",
    short_name: "FitNest",
    description:
      "FitNest ilə fitness mərkəzlərini kəşf et, plan seç və sağlam vərdişlərini qoruyaraq aktiv qal.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0F1C",
    theme_color: "#00B4CC",
    icons: [
      {
        src: "/Logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/Logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
