import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { PRODUCT_MODULE } from "../../modules/products/index"
import ProductModuleService from "../../modules/products/service"
// types
export type CreateNProductStepInput = {
    brand: string | null,
    manufacturer: string | null,
    country_of_origin: string | null,
    warranty_period: number | null,
  
    min_order_quantity: number,
    max_order_quantity: number | null,
    reorder_level: number | null,
    lead_time_days: number | null,
  
    is_featured: boolean,
    is_bestseller: boolean,
  
    meta_title: string | null,
    meta_description: string | null,
    meta_keywords: string | null,
  
    color: string | null,
    size: string | null,
    season: "spring" | "summer" | "fall" | "winter" | "all_season" | null,
  
    cost_price: number | null,
    msrp: number | null,
  
    specifications: Record<string, any> | null,
    features: Record<string, any> | null,
    care_instructions: Record<string, any> | null,
  
    launch_date: Date | null,
    discontinue_date: Date | null
}
// Step to create a new product
// This step will be used in the workflow to create a new product
export const createNProductStep = createStep(
  "create-nproduct-step",
  async (input: CreateNProductStepInput, { container }) => {
    const productModuleService: ProductModuleService = container.resolve(
      PRODUCT_MODULE
    )

    const nproduct = await productModuleService.create(input)

    return new StepResponse(nproduct, nproduct.id)
  }
)
// Workflow to create a new product
// This workflow will use the createNProductStep to create a new product
export const createNProductWorkflow = createWorkflow(
  "create-nproduct",
  (input: CreateNProductStepInput) => {
    const nproduct = createNProductStep(input)

    return new WorkflowResponse(nproduct)
  }
)