import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // needed for nodemailer

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // Honeypot
    const trap = (form.get("company_website") as string) || "";
    if (trap.trim()) return new Response("ok", { status: 200 });

    const name = (form.get("name") as string) || "";
    const email = (form.get("email") as string) || "";
    const company = (form.get("company") as string) || "";
    const topic = (form.get("topic") as string) || "";
    const message = (form.get("message") as string) || "";

    // Collect files (if any)
    const files: { filename: string; content: Buffer }[] = [];
    const maybeFiles = form.getAll("files");
    for (const f of maybeFiles) {
      if (typeof f === "object" && "arrayBuffer" in f) {
        const file = f as File;
        const buf = Buffer.from(await file.arrayBuffer());
        files.push({ filename: file.name || "attachment", content: buf });
      }
    }

    // Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT ?? 587),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <h2>New Contact Request</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Company:</b> ${escapeHtml(company)}</p>
      <p><b>Topic:</b> ${escapeHtml(topic)}</p>
      <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"M.U.S. Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Contact: ${name} — ${topic || "New request"}`,
      html,
      attachments: files.length ? files : undefined,
      replyTo: email || undefined,
    });

    return new Response("ok", { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(err?.message ?? "Failed", { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]!));
}
