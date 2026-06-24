const { copyFileSync, mkdirSync } = require("fs");
const { resolve } = require("path");

const src = resolve(__dirname, "../src/styles/tokens.css");
const dest = resolve(__dirname, "../dist/styles.css");

mkdirSync(resolve(__dirname, "../dist"), { recursive: true });
copyFileSync(src, dest);
console.log("✓ dist/styles.css written");
