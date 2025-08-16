import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, serviceLabels } from "@shared/schema";
import { z } from "zod";

// Email notification service using EmailJS (free email service)
async function sendEmailNotification(inquiry: any) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.log('Email credentials not configured, skipping notification');
    return;
  }

  try {
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        to_email: 'navriaz1978@gmail.com',
        from_name: 'NAVEED RIAZ TECHNICAL SERVICES - Website',
        subject: 'New Quote Request Received',
        customer_name: `${inquiry.firstName} ${inquiry.lastName}`,
        customer_email: inquiry.email,
        customer_phone: inquiry.phone,
        service_requested: serviceLabels[inquiry.service] || inquiry.service,
        project_details: inquiry.message || 'No additional details provided',
        submission_time: new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' }),
        message: `New quote request received from ${inquiry.firstName} ${inquiry.lastName}.

Customer Details:
- Name: ${inquiry.firstName} ${inquiry.lastName}
- Email: ${inquiry.email}
- Phone: ${inquiry.phone}
- Service: ${serviceLabels[inquiry.service] || inquiry.service}

Project Details:
${inquiry.message || 'No additional details provided'}

Submitted: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}

Please respond to the customer within 24 hours.`
      }
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      console.log('Email notification sent successfully');
    } else {
      const errorData = await response.text();
      console.error('Failed to send email notification:', errorData);
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      // Send email notification asynchronously
      sendEmailNotification(inquiry).catch(error => {
        console.error('Email notification failed:', error);
      });
      
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all inquiries (for admin purposes if needed)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
