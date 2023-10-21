import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = {};

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product = this.productService.productSelected;
    if (this.product && !this.product.id) {
      // Obtener el id del producto desde el path
      const idProduct = this.route.snapshot.params['id'];
      console.log('ID product:', idProduct);

      // Llamar al servicio para obtener el producto
      this.productService.findById(idProduct).subscribe((res) => {
        this.product = res;
      });
    }
  }
}
