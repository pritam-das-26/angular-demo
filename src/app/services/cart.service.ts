import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  totalItems = computed(() => {
    return this.cartItems().reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  });

  totalPrice = computed(() => {
    return this.cartItems().reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  });

  addToCart(product: Product): void {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      return [
        ...items,
        {
          product: product,
          quantity: 1,
        },
      ];
    });
  }

  increaseQuantity(productId: number): void {
    this.cartItems.update((items) => {
      return items.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    });
  }

  decreaseQuantity(productId: number): void {
    this.cartItems.update((items) => {
      return items
        .map((item) => {
          if (item.product.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  }

  removeItem(productId: number): void {
    this.cartItems.update((items) => {
      return items.filter((item) => item.product.id !== productId);
    });
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}
