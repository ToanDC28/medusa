import { 
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@medusajs/framework/http"
import * as QueryConfig from './query-config'
import { PostAdminCreateNProduct, getNProductById } from "./validator"
import { MiddlewareRoute } from '@medusajs/medusa'

export const nproductMiddlewares: MiddlewareRoute[] = [
    {
        method: ["POST"],
        matcher: "/admin/nproduct",
        middlewares: [
            validateAndTransformBody(PostAdminCreateNProduct),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/nproduct/:id",
        middlewares: [],
    },
]