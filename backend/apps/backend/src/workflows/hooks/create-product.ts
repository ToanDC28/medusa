// import { createProductsWorkflow } from "@medusajs/medusa/core-flows"
// import { StepResponse } from "@medusajs/framework/workflows-sdk"
// import { Modules } from "@medusajs/framework/utils"
// import { LinkDefinition } from "@medusajs/framework/types"
// import { PRODUCT_MODULE } from "../../modules/products"
// import ProductModuleService from "../../modules/products/service"

// // This hook is triggered after products are created in the createProductsWorkflow.
// // It links the newly created products to a new product ID if provided in the additional_data.
// createProductsWorkflow.hooks.productsCreated(
//     (async ({ products, additional_data }, { container }) => {
//         if (!additional_data?.new_product_id) {
//             return new StepResponse([], [])
//         }

//         const newProductModuleService: ProductModuleService = container.resolve(
//             PRODUCT_MODULE
//         )
//         // if the nproduct doesn't exist, an error is thrown.
//         await newProductModuleService.retrieveNProduct(additional_data.new_product_id as string)

//         // TODO link nproduct to product
//         const link = container.resolve("link")
//         const logger = container.resolve("logger")

//         const links: LinkDefinition[] = []

//         for (const product of products) {
//             links.push({
//                 [Modules.PRODUCT]: {
//                     product_id: product.id,
//                 },
//                 [PRODUCT_MODULE]: {
//                     new_product_id: additional_data.new_product_id,
//                 },
//             })
//         }

//         await link.create(links)

//         logger.info("Linked nproduct to products")

//         return new StepResponse(links, links)
//     })
// )