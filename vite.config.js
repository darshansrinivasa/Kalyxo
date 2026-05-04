import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { handleContactRequest } from "./api/contactHandler.js";

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function attachContactApiMiddleware(server) {
  server.middlewares.use(async (req, res, next) => {
    const pathOnly = req.url?.split("?")[0] ?? "";
    if (pathOnly !== "/api/contact") {
      return next();
    }
    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }
    try {
      const body = await readJsonBody(req);
      const result = await handleContactRequest(body);
      res.statusCode = result.status;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(result.json));
    } catch {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Invalid request body" }));
    }
  });
}

/** Serves POST /api/contact during `vite` and `vite preview` (Vercel runs api/contact.js in production). */
function contactApiDevPlugin() {
  return {
    name: "contact-api-dev",
    configureServer(server) {
      attachContactApiMiddleware(server);
    },
    configurePreviewServer(server) {
      attachContactApiMiddleware(server);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    build: {
      outDir: "dist",
    },
    plugins: [react(), tailwindcss(), contactApiDevPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});