import { Resend } from "resend";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatMessageBody(text) {
  return escapeHtml(text).replace(/\r\n|\r|\n/g, "<br />");
}

function storeWebHref(raw) {
  const t = String(raw).trim();
  if (!t) return "";
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

function buildContactEmailHtml({
  nameSafe,
  emailSafe,
  emailHref,
  storeDisplaySafe,
  storeHrefEncoded,
  serviceSafe,
  messageHtml,
}) {
  const storeRow = storeDisplaySafe
    ? `<tr>
        <td style="padding:0 0 16px 0;">
          <p style="margin:0 0 4px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Store URL</p>
          <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#0f172a;">
            <a href="${storeHrefEncoded}" style="color:#6d28d9;text-decoration:none;font-weight:500;">${storeDisplaySafe}</a>
          </p>
        </td>
      </tr>`
    : `<tr>
        <td style="padding:0 0 16px 0;">
          <p style="margin:0 0 4px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Store URL</p>
          <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#94a3b8;font-style:italic;">Not provided</p>
        </td>
      </tr>`;

  const serviceRow = serviceSafe
    ? `<tr>
        <td style="padding:0 0 16px 0;">
          <p style="margin:0 0 4px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Service</p>
          <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#0f172a;">${serviceSafe}</p>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New contact inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;-webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:28px 16px 40px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;">
          <tr>
            <td style="background-color:#6d28d9;border-radius:12px 12px 0 0;padding:26px 28px 24px 28px;">
              <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:700;line-height:1.3;color:#ffffff;">New contact inquiry</p>
              <p style="margin:8px 0 0 0;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.45;color:#e9d5ff;">From your Kalyxo website form</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;border:1px solid #e2e8f0;border-top:0;padding:28px 28px 24px 28px;border-radius:0 0 12px 12px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding:0 0 16px 0;">
                    <p style="margin:0 0 4px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Name</p>
                    <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;color:#0f172a;font-weight:600;">${nameSafe}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px 0;">
                    <p style="margin:0 0 4px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Email</p>
                    <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;">
                      <a href="mailto:${emailHref}" style="color:#6d28d9;text-decoration:none;font-weight:500;">${emailSafe}</a>
                    </p>
                  </td>
                </tr>
                ${storeRow}
                ${serviceRow}
                <tr>
                  <td style="padding:16px 0 0 0;border-top:1px solid #e2e8f0;">
                    <p style="margin:0 0 10px 0;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">Message</p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                      <tr>
                        <td style="padding:16px 18px;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.55;color:#334155;">${messageHtml}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px 12px 0 12px;">
              <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#94a3b8;">Reply to this lead using the email address above.</p>
              <p style="margin:6px 0 0 0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#cbd5e1;">Kalyxo</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

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

  const nameSafe = escapeHtml(nameTrim);
  const emailSafe = escapeHtml(emailTrim);
  const storeDisplaySafe = storeUrlTrim ? escapeHtml(storeUrlTrim) : "";
  const storeHrefRaw = storeUrlTrim ? storeWebHref(storeUrlTrim) : "";
  const storeHrefEncoded = storeHrefRaw
    ? escapeHtml(storeHrefRaw)
    : "";
  const serviceSafe = serviceTrim ? escapeHtml(serviceTrim) : "";
  const messageHtml = formatMessageBody(messageTrim);

  const subjectName = nameTrim.replace(/[\r\n]+/g, " ").trim();

  const html = buildContactEmailHtml({
    nameSafe,
    emailSafe,
    emailHref: escapeHtml(emailTrim),
    storeDisplaySafe,
    storeHrefEncoded,
    serviceSafe,
    messageHtml,
  });

  try {
    await resend.emails.send({
      from: process.env.VITE_PUBLIC_EMAIL_FROM,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New inquiry from ${subjectName}`,
      replyTo: emailTrim,
      html,
    });

    return { status: 200, json: { success: true } };
  } catch {
    return { status: 500, json: { error: "Something went wrong" } };
  }
}
