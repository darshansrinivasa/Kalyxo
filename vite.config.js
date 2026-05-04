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

const CONTACT_API_PATHS = new Set(["/api/contact", "/api/send-email"]);

function attachContactApiMiddleware(server) {
  server.middlewares.use(async (req, res, next) => {
    const pathOnly = req.url?.split("?")[0] ?? "";
    if (!CONTACT_API_PATHS.has(pathOnly)) {
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

/** Serves POST /api/send-email (and /api/contact) during `vite` / `vite preview`; production uses api/*.js on Vercel. */
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