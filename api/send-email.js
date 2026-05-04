import { handleContactRequest } from "./contactHandler.js";

/**
 * Vercel serverless entry for contact email. Resend and secrets live in
 * contactHandler.js (process.env only — never import.meta.env).
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = await handleContactRequest(req.body);
    return res.status(result.status).json(result.json);
  } catch {
    return res.status(500).json({ error: "Email failed to send" });
  }
}
