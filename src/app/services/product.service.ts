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
      description: 'Powerful laptop for development and professional work.',
    },
    {
      id: 2,
      name: 'iPhone 16',
      price: 120000,
      image: 'https://picsum.photos/300/200?2',
      description: 'Premium smartphone with a powerful camera.',
    },
    {
      id: 3,
      name: 'Samsung S25',
      price: 95000,
      image: 'https://picsum.photos/300/200?3',
      description: 'Android flagship phone with a modern design.',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
