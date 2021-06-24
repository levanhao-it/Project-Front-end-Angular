import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-day',
  templateUrl: './product-day.component.html',
  styleUrls: ['./product-day.component.scss'],
})
export class ProductDayComponent implements OnInit {
  dataProduct: Array<Product> = [];
  weekDays = [{ day: 'string' }];
  titleRice = 'Cơm Trưa Văn Phòng';
  date!: Date;
  productCheck = true;
  constructor(
    private product: ProductsService,
    private cartService: CartService
  ) {
    this.weekDays = this.product.weekDays;
  }

  ngOnInit(): void {
    this.connect();
  }
  public connect() {
    this.product.connectProduct();
  }
  public listProductDay(day: String): Product[] {
    this.dataProduct = this.product.productDay(day);
    this.productCheck = false;
    return this.dataProduct;
  }
  public getProduct() {
    this.productCheck = true;
    return this.product.getDayProduct();
  }

  public addToCart(product: Product) {
    this.cartService.addItem(product);
  }
}
