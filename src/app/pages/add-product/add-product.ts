import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  private formBuilder = inject(FormBuilder);
  private productService = inject(ProductService);
  private router = inject(Router);

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [null as number | null, [Validators.required, Validators.min(1)]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  get name() {
    return this.productForm.controls.name;
  }

  get price() {
    return this.productForm.controls.price;
  }

  get image() {
    return this.productForm.controls.image;
  }

  get description() {
    return this.productForm.controls.description;
  }

  addProduct(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const formValue = this.productForm.getRawValue();

    const newProduct: Product = {
      id: Date.now(),
      name: formValue.name!,
      price: Number(formValue.price),
      image: formValue.image!,
      description: formValue.description!,
    };

    this.productService.addProduct(newProduct);

    this.productForm.reset();

    this.router.navigate(['/products']);
  }
}
