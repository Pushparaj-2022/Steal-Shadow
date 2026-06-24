import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "lucide-react"],
  treeshake: true,
  splitting: false,
  minify: false,
  banner: {
    js: '"use client";',
  },
  onSuccess: "node scripts/copy-styles.cjs",
});
