import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "./src/styles/header.css";',
        },
      },
    },
    optimizeDeps: {
      include: ["micromodal", "tiny-invariant"],
    },
    ssr: {
      noExternal: ["micromodal", "tiny-invariant"],
    },
  },
});
