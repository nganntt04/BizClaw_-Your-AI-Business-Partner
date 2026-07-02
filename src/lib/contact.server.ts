import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendContactNotification } from "./mailer";
import { prisma } from "./prisma";

// Validate lại ở server — không tin tưởng dữ liệu từ client dù đã validate ở form
const contactServerSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(9).max(15).regex(/^[0-9+\s().-]+$/),
  email: z.string().trim().min(1).email().max(255),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactServerSchema)
  .handler(async ({ data }) => {
    const submission = await prisma.contactSubmission.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        message: data.message || null,
      },
    });

    try {
      await sendContactNotification(data);
    } catch (err) {
      // Không throw để không phá trải nghiệm người dùng nếu SMTP tạm lỗi,
      // nhưng vẫn log để bạn kiểm tra — dữ liệu đã lưu DB an toàn rồi.
      console.error("Gửi email thông báo thất bại:", err);
    }

    return { id: submission.id };
  });