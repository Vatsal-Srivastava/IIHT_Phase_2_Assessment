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

  //Initializing Curr User, isADmin, isAuth anf quantity
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
    //cheching updated number of items in cart
    this.quan = this.cartService.items.length;

    //Keeping Check of User in session
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
    //Opening Dialog box to create item
    const dialogRef = this.dialog.open(CreateProductComponent, {
      data: {},
    });

    //Working With resut obtained when dialog box is closed
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(createProduct({ product: result }));
      } else {
        console.log('Create box closed!');
      }
    });
  }
  // up = true;
  //CAe

  //logging out by removing the user from session
  logout() {
    sessionStorage.removeItem('curr');
    this.isAdmin = false;
    this.router.navigate(['home']);
  }
}
