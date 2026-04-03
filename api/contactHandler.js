import { Resend } from "resend";

/**
 * Shared contact submission logic for Vercel (`api/contact.js`) and Vite dev middleware.
 */
export async function handleContactRequest(body) {
  const {
    name,
    email,
    phone,
    company,
    service,
    budget,
    timeline,
    message,
    website,
  } = body || {};

  if (website) {
    return { status: 400, json: { error: "Spam detected" } };
  }

  if (!name || !email || !message) {
    return {
      status: 400,
      json: { error: "Missing required fields" },
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
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

    return { status: 200, json: { success: true } };
  } catch (error) {
    console.error(error);
    return { status: 500, json: { error: "Something went wrong" } };
  }
}
