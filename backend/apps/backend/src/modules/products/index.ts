import { Module } from "@medusajs/framework/utils"
import ProductModuleService from "./service"

// This module defines a new product module in the Medusa framework.
// It provides a service for managing products and is registered under the name "new_products".
export const PRODUCT_MODULE = "new_products"

export default Module(PRODUCT_MODULE, {
  service: ProductModuleService,
})