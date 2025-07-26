import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { PRODUCT_MODULE } from "../../modules/products/index"
import ProductModuleService from "../../modules/products/service"
export type GetNewProductStepInput = {
  id: string
}
export const getNProductByIdStep = createStep(
  "get-nproduct-by-id-step",
  async (input: GetNewProductStepInput, { container }) => {
    const productModuleService: ProductModuleService = container.resolve(
      PRODUCT_MODULE
    )

    const nproduct = await productModuleService.get(input)

    return new StepResponse(nproduct, nproduct.id)
  }
)
export const getNProductWorkflow = createWorkflow(
  "get-nproduct-by-id-workflow",
  (input: GetNewProductStepInput) => {
    const nproduct = getNProductByIdStep(input)

    return new WorkflowResponse(nproduct)
  }
)