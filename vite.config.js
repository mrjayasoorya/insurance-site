import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@data": path.resolve("./src/data"),
      "@components": path.resolve("./src/components"),
      "@layouts": path.resolve("./src/layouts")
    }
  }
});
