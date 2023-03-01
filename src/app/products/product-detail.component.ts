import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = "Product Detail";
  product: IProduct | undefined;
  errorMessage = '';
  imageWidth = 400;
  imageMargin = 10;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle +=  `: ${id}`;
    // if(id) {
    //   this.getProduct(id);
    // }
    this.productService.getProductById(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

// getProduct(id: number): void {
//   this.productService.getProductById(id).subscribe({
//     next: product => this.product = product,
//     error: err => this.errorMessage = err
//   });
// }

  onBack(): void  {
    this.router.navigate(['products']);
  }

}
