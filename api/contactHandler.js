import { Resend } from "resend";

/**
 * Shared contact submission logic for Vercel (`api/contact.js`) and Vite dev middleware.
 */
export async function handleContactRequest(body) {
  const {
    name,
    email,
    storeUrl,
    service,
    message,
    website,
  } = body || {};

  if (website) {
    return { status: 400, json: { error: "Spam detected" } };
  }

  const nameTrim = typeof name === "string" ? name.trim() : "";
  const emailTrim = typeof email === "string" ? email.trim() : "";
  const messageTrim = typeof message === "string" ? message.trim() : "";
  const storeUrlTrim =
    typeof storeUrl === "string" ? storeUrl.trim() : "";
  const serviceTrim =
    typeof service === "string" ? service.trim() : "";

  if (!nameTrim || !emailTrim || !messageTrim) {
    return {
      status: 400,
      json: { error: "Missing required fields" },
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const storeLine = storeUrlTrim
    ? `<p><strong>Store URL:</strong> ${storeUrlTrim}</p>`
    : `<p><strong>Store URL:</strong> <em>Not provided</em></p>`;
  const serviceLine = serviceTrim
    ? `<p><strong>Service interested in:</strong> ${serviceTrim}</p>`
    : "";

  try {
    await resend.emails.send({
      from: process.env.VITE_PUBLIC_EMAIL_FROM,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${nameTrim}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${nameTrim}</p>
        <p><strong>Email:</strong> ${emailTrim}</p>
        ${storeLine}
        ${serviceLine}
        <p><strong>Message:</strong></p>
        <p>${messageTrim}</p>
      `,
    });

    return { status: 200, json: { success: true } };
  } catch (error) {
    console.error(error);
    return { status: 500, json: { error: "Something went wrong" } };
  }
}
