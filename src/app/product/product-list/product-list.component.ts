import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('Se inicio la lista de productos');
    this.getProducts();
  }

  getProducts() {
    this.productService.findAll().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }
}
