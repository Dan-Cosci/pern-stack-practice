import { Router } from "express";
import { 
  createProduct, deleteProduct, 
  getProduct, getProducts, 
  updateProduct 
} from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.post('/', createProduct);

export default productRouter;