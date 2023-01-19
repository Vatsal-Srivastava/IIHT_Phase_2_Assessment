import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { Category } from 'src/app/product/product';
import { Store } from '@ngrx/store';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductFormComponent } from 'src/app/product/product-form/product-form.component';
import { CreateProductComponent } from 'src/app/product/create-product/create-product.component';
import { createProduct } from 'src/app/state/products/product.actions';
import { getCurrUser } from 'src/app/state/users/user.selectors';
import { User } from 'src/app/user/user';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, DoCheck {
  constructor(
    private store: Store,
    public dialog: MatDialog,
    public router: Router,
    private cartService: CartService
  ) {}

  CurrUser!: User | null;
  isAdmin: boolean = false;
  isAuth: boolean = false;
  quan: number = 0;
  ngOnInit(): void {
    // this.store.select(getCurrUser).subscribe((val) => {
    //   this.CurrUser = val;
    //   this.isAdmin = val.isAdmin;
    // });
  }

  ngDoCheck(): void {
    // console.log('do check');
    this.quan = this.cartService.getTotalItems();
    this.CurrUser = JSON.parse(sessionStorage.getItem('curr') || 'null');
    // console.log(this.CurrUser);

    if (this.CurrUser?.isAdmin) {
      this.isAdmin = true;
    }

    if (this.CurrUser !== null) {
      // console.log(this.CurrUser);

      this.isAuth = true;
    } else {
      // console.log('Curr user Empty');

      this.isAuth = false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(createProduct({ product: result }));
      } else {
        console.log('Create box closed!');
      }
    });
  }
  // up = true;
  category: any[] = [
    'All Products',
    Category.Dairy,
    Category.Beauty,
    Category.Tech,
    Category.Grocery,
    Category.Fruits,
    Category.Veges,
  ];
  logout() {
    sessionStorage.removeItem('curr');
    this.isAdmin = false;
    this.router.navigate(['home']);
  }
}
