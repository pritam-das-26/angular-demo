import { Component, Input, Output, EventEmitter, inject } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private router = inject(Router);

  @Input()
  product!: Product;

  @Output()
  add = new EventEmitter<Product>();

  addToCart(): void {
    this.add.emit(this.product);
  }

  viewDetails(): void {
    this.router.navigate(['/product', this.product.id]);
  }
}
