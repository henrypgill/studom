import type { Config } from "tailwindcss";
import sharedConfig from "@studom/tailwind-config";

const config: Config = {
  presets: [sharedConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
