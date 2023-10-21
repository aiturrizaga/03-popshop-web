import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  productForm: FormGroup = new FormGroup<any>('');

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.initProductForm();
  }

  initProductForm() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      price: [0, [Validators.required]],
      category: [''],
      image: [''],
    });
  }

  registerProduct() {
    console.log('Product form:', this.productForm.value);
    this.productService.register(this.productForm.value).subscribe((res) => {
      console.log('Fake Api Product Res:', res);
    });
  }
}
