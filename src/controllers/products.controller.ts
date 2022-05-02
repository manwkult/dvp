import { NextFunction, Request, Response } from 'express';
import { Product } from '@/interfaces/product.interface';
import productService from '@services/products.service';

class ProductsController {
  public productService = new productService();

  public getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: Product[] = await this.productService.findAllProduct();
      console.log(data);
      res.status(200).json({ data, message: 'Products List' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;
