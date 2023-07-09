import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    API_TOKEN: `"${process.env.REACT_APP_API_TOKEN}"`,
    API_URL: `"${process.env.REACT_APP_API_URL}"`,
    UPLOAD_URL: `"${process.env.REACT_APP_UPLOAD_URL}"`,
  },
});
