import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductModule } from 'src/app/product/product.module';
import { MaterialRoutingModule } from '../material-routing.module';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [provideMockStore({})],
      imports: [
        RouterTestingModule,
        ProductModule,
        CommonModule,
        MaterialRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        NgbCarouselModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatDialogModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Welcome User', () => {
    fixture.detectChanges();
    console.log(component.CurrUser);

    let ele = fixture.debugElement.query(By.css('.bt'));
    expect(ele.nativeElement.innerText).toEqual('Welcome, Manpreet');
  });

  it('Should Render Logout if User is Logged in', () => {
    //User is Logged in By Validate User
    let ele1 = fixture.debugElement.query(By.css('.bt1')); //login
    let ele2 = fixture.debugElement.query(By.css('.bt2')); //logout
    expect(ele1).toBeFalsy();
    expect(ele2).toBeTruthy();

    // ele2.triggerEventHandler('click', null);

    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(ele2).toBeFalsy();
    //   expect(ele1).toBeTruthy();
    // });
  });
});
