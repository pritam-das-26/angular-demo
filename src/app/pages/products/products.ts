import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProductCard } from '../../components/product-card/product-card';

import { ProductService } from '../../services/product.service';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productService = inject(ProductService);

  private cartService = inject(CartService);

  products = this.productService.getProducts();

  addProduct(product: any) {
    this.cartService.addToCart(product);
  }
}
