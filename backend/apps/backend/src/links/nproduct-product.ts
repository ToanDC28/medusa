import ProductModule from "@medusajs/medusa/product"
import { defineLink } from "@medusajs/framework/utils"
import NProductModel from "#/modules/products"

// This file defines a link for the new product model in the Medusa framework.
// It specifies that the linkable entity is a product and that it is a list of products
export default defineLink(
  {
    linkable: ProductModule.linkable.product,
    isList: true,
  },
  NProductModel.linkable.newProduct
)