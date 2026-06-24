import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Macbook Pro',
      price: 180000,
      image: 'https://picsum.photos/300/200?1',
      description: 'Apple Laptop',
    },

    {
      id: 2,
      name: 'iPhone 16',
      price: 120000,
      image: 'https://picsum.photos/300/200?2',
      description: 'Apple Phone',
    },

    {
      id: 3,
      name: 'Samsung S25',
      price: 95000,
      image: 'https://picsum.photos/300/200?3',
      description: 'Android Phone',
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
