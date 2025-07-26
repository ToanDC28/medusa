import { getNProductWorkflow } from "../../../../workflows/nproduct/get-nproduct"
import {
    MedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const { id } = req.params
    const { result } = await getNProductWorkflow(req.scope)
      .run({
        input: { id: id},
      })
  
    res.json({ result })
  }