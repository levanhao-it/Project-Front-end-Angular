import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.scss']
})
export class WishlistDetailComponent implements OnInit {
  items= this.wishlist.getWishlistItems();

  constructor(private wishlist: WishlistService, private cartService: CartService,) { }

  ngOnInit(): void {
  }
  public addToCart(product: Product) {
    this.cartService.addItem(product);
  }
  removeItem(id: any){
    const index=this.items.findIndex((item)=>item.id===id);
    this.items.splice(index,1);
    this.wishlist.setWishlistItems(this.items);
  }

}