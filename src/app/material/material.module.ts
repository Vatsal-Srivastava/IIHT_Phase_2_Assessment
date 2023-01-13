import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialRoutingModule } from './material-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [NavbarComponent],
})
export class MaterialModule {}
