import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
      website, // honeypot field
    } = req.body;

    // 🛑 Honeypot spam protection
    if (website) {
      return res.status(400).json({ error: "Spam detected" });
    }

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    await resend.emails.send({
      from: process.env.VITE_PUBLIC_EMAIL_FROM,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
}