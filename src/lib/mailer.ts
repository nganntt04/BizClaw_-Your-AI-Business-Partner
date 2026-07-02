import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type ContactPayload = {
  fullName: string;
  phone: string;
  email: string;
  message?: string;
};

export async function sendContactNotification(data: ContactPayload) {
  const to = process.env.CONTACT_NOTIFY_EMAIL ?? "info@405cyse.com.vn";

  await transporter.sendMail({
    from: `"BIZCLAW AI AGENT" <${process.env.SMTP_USER}>`,
    to,
    replyTo: data.email,
    subject: `[BIZCLAW AI AGENT] Khách hàng mới đăng ký tư vấn: ${data.fullName}`,
    html: `
      <h3>Có khách hàng mới đăng ký tư vấn</h3>
      <p><b>Họ tên:</b> ${data.fullName}</p>
      <p><b>Điện thoại:</b> ${data.phone}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Lời nhắn:</b> ${data.message || "(không có)"}</p>
    `,
  });
}