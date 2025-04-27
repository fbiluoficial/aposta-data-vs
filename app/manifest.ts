import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FutebolData",
    short_name: "FutebolData",
    description: "Aplicação para anotações de partidas de futebol",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#0D0D0D",
  }
}
