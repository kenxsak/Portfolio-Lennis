import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log it and return success
      console.log("Contact form submission:", validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for reaching out! I'll get back to you soon." 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check your inputs." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
