import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://kalliope-be-488144718577.us-central1.run.app:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
