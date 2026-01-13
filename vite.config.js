import { resolve } from "path";

export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "gestion-qcm": resolve(__dirname, "gestion-qcm.html"),
      },
    },
  },
  publicDir: "public",
};
