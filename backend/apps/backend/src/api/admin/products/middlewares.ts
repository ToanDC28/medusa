import { validateAndTransformQuery } from '@medusajs/framework'
import { MiddlewareRoute } from '@medusajs/medusa'

import { retrieveAttributeQueryConfig } from './query-config'
import { AdminGetAttributesParams } from './validators'

import { z } from "zod"
export const adminProductsMiddlewares: MiddlewareRoute[] = [
  {
    method: ['GET'],
    matcher: '/admin/products/:id/applicable-attributes',
    middlewares: [
      validateAndTransformQuery(
        AdminGetAttributesParams,
        retrieveAttributeQueryConfig
      )
    ]
  },
  {
    matcher: "/admin/products",
    method: ["POST"],
    additionalDataValidator: {
      brand_id: z.string().optional(),
    },
  },
]
