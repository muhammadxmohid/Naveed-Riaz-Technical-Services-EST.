/// <reference types="node" />

import { insertInquirySchema, serviceLabels } from "../shared/schema";
import { storage } from "../server/storage";

async function sendEmailNotification(inquiry: any): Promise<void> {
  const env = (globalThis as any).process?.env || {};
  const serviceId = env.EMAILJS_SERVICE_ID as string | undefined;
  const templateId = env.EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = env.EMAILJS_PUBLIC_KEY as string | undefined;
  const privateKey = env.EMAILJS_PRIVATE_KEY as string | undefined;

  if (!serviceId || !templateId || !publicKey || !privateKey) return;

  const emailData = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken: privateKey,
    template_params: {
      to_email: "navriaz1978@gmail.com",
      from_name: "NAVEED RIAZ TECHNICAL SERVICES - Website",
      subject: "New Quote Request Received",
      customer_name: `${inquiry.firstName} ${inquiry.lastName}`,
      customer_email: inquiry.email,
      customer_phone: inquiry.phone,
      service_requested: serviceLabels[inquiry.service] || inquiry.service,
      project_details: inquiry.message || "No additional details provided",
      submission_time: new Date().toLocaleString("en-AE", {
        timeZone: "Asia/Dubai",
      }),
      message: `New quote request received from ${inquiry.firstName} ${inquiry.lastName}.`,
    },
  };

  try {
    await (globalThis as any).fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      }
    );
  } catch {}
}

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const body =
        typeof req.body === "string"
          ? JSON.parse(req.body || "{}")
          : req.body || {};
      const result = insertInquirySchema.safeParse(body);
      if (!result.success) {
        return res
          .status(400)
          .json({
            success: false,
            message: "Validation error",
            errors: result.error.issues,
          });
      }
      const inquiry = await storage.createInquiry(result.data);
      void sendEmailNotification(inquiry);
      return res.status(200).json({ success: true, inquiry });
    } catch {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }

  if (req.method === "GET") {
    try {
      const inquiries = await storage.getInquiries();
      return res.status(200).json(inquiries);
    } catch {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }

  res.setHeader("Allow", "GET, POST");
  res.status(405).json({ message: "Method Not Allowed" });
}
