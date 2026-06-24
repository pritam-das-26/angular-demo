import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input()
  product!: Product;

  @Output()
  add = new EventEmitter<Product>();

  addToCart() {
    this.add.emit(this.product);
  }
}
