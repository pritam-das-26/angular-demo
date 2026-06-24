import { Routes } from '@angular/router';

import { Home } from './pages/home/home';

import { Products } from './pages/products/products';

import { Cart } from './pages/cart/cart';

import { AddProduct } from './pages/add-product/add-product';

import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  {
    path: 'products',
    component: Products,
  },

  {
    path: 'cart',
    component: Cart,
  },

  {
    path: 'add-product',
    component: AddProduct,
  },

  {
    path: 'product/:id',
    component: ProductDetail,
  },
];
