import { hash } from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from '@/entities/products.entity';
import { HttpException } from '@exceptions/HttpException';
import { Product } from '@/interfaces/product.interface';
import { isEmpty } from '@utils/util';

@EntityRepository()
class ProductService extends Repository<ProductEntity> {
  public async findAllProduct(): Promise<Product[]> {
    const products: Product[] = await ProductEntity.find();
    return products;
  }
}

export default ProductService;
