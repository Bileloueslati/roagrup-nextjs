import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import EmailTemplate from "swig-email-templates";
import path from "path";

const transporter = nodemailer.createTransport({
  host: "ssl0.ovh.net",
  port: 587,
  secure: false,
  auth: {
    user: "noreply@fraicheur.tn",
    pass: "Hello@World300",
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;

    const templatePath = `${path.resolve("./")}/email_templates`;

    const templates = new EmailTemplate({
      root: path.join(templatePath),
    });

    const { html, text } = await templates.render("contact.html", { data });

    await transporter.sendMail({
      from: `Roa GRUP <noreply@fraicheur.tn>`,
      to: "mrbileltn@gmail.com",
      subject: "You just receive a message from your website",
      text: text,
      html: html,
    });

    res.status(200).json(data);
  } catch (e: unknown) {
    console.log(e);
    res.status(400).json({ error: "error" });
  }
}
