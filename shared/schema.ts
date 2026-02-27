import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface HearingStatistic {
  id: string;
  ageGroup: string;
  percentage: number;
  description: string;
  source: string;
  sourceUrl: string;
}

export interface GlobalStatistic {
  id: string;
  region: string;
  affected: number;
  population: number;
  percentage: number;
  projectedBy2050: number;
  source: string;
  sourceUrl: string;
}

export interface TreatmentGapData {
  id: string;
  category: string;
  menPercentage: number;
  womenPercentage: number;
  description: string;
  source: string;
  sourceUrl: string;
}

export interface RiskFactor {
  id: string;
  title: string;
  description: string;
  icon: string;
  forDaughters: string;
  forMoms: string;
  forPolicymakers?: string;
  source: string;
  sourceUrl: string;
}

export interface PolicymakerAction {
  id: string;
  letter: string;
  title: string;
  description: string;
  action: string;
  icon: string;
  source: string;
  sourceUrl: string;
}

export interface Citation {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  url: string;
}
