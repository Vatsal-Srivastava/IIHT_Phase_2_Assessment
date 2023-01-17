import { Component } from '@angular/core';
import { Category } from 'src/app/product/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
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
}
