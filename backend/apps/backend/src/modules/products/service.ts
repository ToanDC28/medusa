import { MedusaService } from "@medusajs/framework/utils"
import { NProduct } from "./models/product-custom"

// This service is used to create products in the database
// It extends the MedusaService to provide additional functionality
class ProductModuleService extends MedusaService({
  NProduct,
}) {
  async create(data: any) {
    const product = await this.createNProducts(data)
    return product
  }
  async get(data: any) {
    const product = await this.retrieveNProduct(data.id)
    return product
  }
}

export default ProductModuleService