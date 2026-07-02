// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // Ghi đè preset mặc định (cloudflare) để build ra Node server chạy trên VPS
    // @ts-expect-error - nitro option được inject bởi @lovable.dev/vite-tanstack-config
    nitro: { preset: "node-server" },
  },
});