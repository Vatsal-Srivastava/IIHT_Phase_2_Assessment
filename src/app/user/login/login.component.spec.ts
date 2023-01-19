import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { UserService } from 'src/app/services/user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [provideMockStore({}), UserService],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Check Name Form Feild ', () => {
    const el = fixture.debugElement.query(By.css('.name'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('placeholder')).toEqual('username');
  });

  it('Should Check Name Form Feild ', () => {
    const el = fixture.debugElement.query(By.css('.password'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('placeholder')).toEqual('password');
  });

  it('Should Check if the button is disabled for invalid Login Form', () => {
    const el = fixture.debugElement.query(By.css('.bt'));
    const el1 = fixture.debugElement.query(By.css('.name'));
    const el2 = fixture.debugElement.query(By.css('.password'));

    expect(el).toBeTruthy();
    expect(el1).toBeTruthy();
    expect(el2).toBeTruthy();

    expect(el.nativeElement.disabled).toBeTruthy();
    const ctrl = component.loginForm.get('password');
    const ctrl1 = component.loginForm.get('name');
    ctrl?.setValue('pass1234');
    ctrl1?.setValue('Manpreet');

    fixture.detectChanges();
    expect(el2.nativeElement.value).toEqual('pass1234');
    expect(el1.nativeElement.value).toEqual('Manpreet');
    expect(el.nativeElement.disabled).toBeFalsy();
  });
});
