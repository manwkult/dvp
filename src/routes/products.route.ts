import { Router } from 'express';
import ProductsController from '@/controllers/products.controller';
import { Routes } from '@interfaces/routes.interface';

class ProductsRoute implements Routes {
  public path = '/api/products';
  public router = Router();
  public productsController = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.productsController.getProducts);
  }
}

export default ProductsRoute;
