import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.get("/api/stats/hearing", (_req, res) => {
    res.json({
      ageProgression: [
        { id: "age-30s", ageGroup: "30s", percentage: 5, source: "NIDCD, 2023" },
        { id: "age-40s", ageGroup: "40s", percentage: 10, source: "NIDCD, 2023" },
        { id: "age-50s", ageGroup: "50s", percentage: 20, source: "NIDCD, 2023" },
        { id: "age-60s", ageGroup: "60s", percentage: 39, source: "NIDCD, 2023" },
        { id: "age-70s", ageGroup: "70+", percentage: 65, source: "NIDCD, 2023" }
      ],
      treatmentGap: [
        { category: "Hearing Aid Use (45+)", menPercentage: 9, womenPercentage: 5 },
        { category: "Hearing Aid Use (75-84)", menPercentage: 26.7, womenPercentage: 13.7 }
      ],
      globalStats: {
        totalAffected: "1.5 billion",
        disabling: "430 million",
        projectedBy2050: "1 in 4",
        economicCost: "$980 billion"
      }
    });
  });

  return httpServer;
}
