import { z } from "zod"

export const PostAdminCreateNProduct = z.object({
    brand: z.string().nullable(),
    manufacturer: z.string().nullable(),
    country_of_origin: z.string().nullable(),
    warranty_period: z.number().nullable(),
  
    min_order_quantity: z.number().default(1),
    max_order_quantity: z.number().nullable(),
    reorder_level: z.number().nullable(),
    lead_time_days: z.number().nullable(),
  
    is_featured: z.boolean().default(false),
    is_bestseller: z.boolean().default(false),
  
    meta_title: z.string().nullable(),
    meta_description: z.string().nullable(),
    meta_keywords: z.string().nullable(),
  
    color: z.string().nullable(),
    size: z.string().nullable(),
    season: z.enum(["spring", "summer", "fall", "winter", "all_season"]).nullable(),
  
    cost_price: z.number().nullable(),
    msrp: z.number().nullable(),
  
    specifications: z.record(z.any()).nullable(),
    features: z.record(z.any()).nullable(),
    care_instructions: z.record(z.any()).nullable(),
  
    launch_date: z.union([z.string().transform((s) => new Date(s)), z.date()]).nullable(),
    discontinue_date: z.union([z.string().transform((s) => new Date(s)), z.date()]).nullable()
})

export const getNProductById = z.object({
    id: z.string(),
})