import { z } from "zod";
import { insertInquirySchema, serviceLabels } from "../shared/schema";
import { storage } from "../server/storage";

async function sendEmailNotification(inquiry: any): Promise<void> {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return;
  }

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
      message: `New quote request received from ${inquiry.firstName} ${
        inquiry.lastName
      }.

Customer Details:
- Name: ${inquiry.firstName} ${inquiry.lastName}
- Email: ${inquiry.email}
- Phone: ${inquiry.phone}
- Service: ${serviceLabels[inquiry.service] || inquiry.service}

Project Details:
${inquiry.message || "No additional details provided"}

Submitted: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })}

Please respond to the customer within 24 hours.`,
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
  } catch {
    // ignore email errors
  }
}

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const body =
        typeof req.body === "string"
          ? JSON.parse(req.body || "{}")
          : req.body || {};
      const validated = insertInquirySchema.parse(body);
      const inquiry = await storage.createInquiry(validated);
      void sendEmailNotification(inquiry);
      res.status(200).json({ success: true, inquiry });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        res
          .status(400)
          .json({
            success: false,
            message: "Validation error",
            errors: error.errors,
          });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    }
    return;
  }

  if (req.method === "GET") {
    try {
      const inquiries = await storage.getInquiries();
      res.status(200).json(inquiries);
    } catch {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    return;
  }

  res.setHeader("Allow", "GET, POST");
  res.status(405).json({ message: "Method Not Allowed" });
}
