import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { 
  createNProductWorkflow,
} from "../../../workflows/nproduct/create-nproduct"
import { z } from "zod"
import { PostAdminCreateNProduct, getNProductById } from "./validator"
type PostAdminCreateNPro = z.infer<typeof PostAdminCreateNProduct>

export const POST = async (
  req: MedusaRequest<PostAdminCreateNPro>,
  res: MedusaResponse
) => {
  const { result } = await createNProductWorkflow(req.scope)
    .run({
      input: req.validatedBody,
    })

  res.json({ product: result })
}