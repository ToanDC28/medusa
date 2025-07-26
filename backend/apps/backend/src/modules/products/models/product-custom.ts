import { model } from "@medusajs/framework/utils"

export const NProduct = model.define("new_product", {
  id: model.id().primaryKey(),
  brand: model.text().nullable(),
  manufacturer: model.text().nullable(),
  country_of_origin: model.text().nullable(),
  warranty_period: model.number().nullable(),

  min_order_quantity: model.number().default(1),
  max_order_quantity: model.number().nullable(),
  reorder_level: model.number().nullable(),
  lead_time_days: model.number().nullable(),

  is_featured: model.boolean().default(false),
  is_bestseller: model.boolean().default(false),

  meta_title: model.text().nullable(),
  meta_description: model.text().nullable(),
  meta_keywords: model.text().nullable(),

  color: model.text().nullable(),
  size: model.text().nullable(),
  season: model.enum(["spring", "summer", "fall", "winter", "all_season"]).nullable(),

  cost_price: model.number().nullable(),
  msrp: model.number().nullable(),

  specifications: model.json().nullable(),
  features: model.json().nullable(),
  care_instructions: model.json().nullable(),

  launch_date: model.dateTime().nullable(),
  discontinue_date: model.dateTime().nullable()
})

export default NProduct
