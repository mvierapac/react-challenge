import { defineConfig, mergeConfig } from "vitest/config";
import { fileURLToPath } from "node:url";
import viteConfig from "./vite.config";

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.js",
      root: fileURLToPath(new URL("./", import.meta.url)),
      coverage: {
        exclude: [
          "src/assets/**",
          "vitest.config.{js,ts}",
          "vite.config.{js,ts}",
          "eslint.config.{js,ts}",
        ],
      },
    },
  })
);
