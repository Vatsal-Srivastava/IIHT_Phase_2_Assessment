import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const spy1 = jasmine.createSpyObj('name', ['']);
    await TestBed.configureTestingModule({
      declarations: [CreateProductComponent],
      imports: [
        MatTabsModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
      providers: [
        provideMockStore({}),
        { provide: MatDialogRef, useValue: { spy } },
        { provide: MAT_DIALOG_DATA, useValue: 'spy1' },
        FormBuilder,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Check if the button is disabled for invalid Form', () => {
    const el = fixture.debugElement.query(By.css('.bt'));
    const el1 = fixture.debugElement.query(By.css('.name'));
    const el2 = fixture.debugElement.query(By.css('.price'));
    const el3 = fixture.debugElement.query(By.css('.category'));

    const el4 = fixture.debugElement.query(By.css('.rating'));

    expect(el).toBeTruthy();
    expect(el1).toBeTruthy();
    expect(el2).toBeTruthy();
    expect(el3).toBeTruthy();
    expect(el4).toBeTruthy();

    expect(el.nativeElement.disabled).toBeTruthy();
    const ctrl = component.productForm.get('price');
    const ctrl1 = component.productForm.get('name');
    const ctrl2 = component.productForm.get('category');
    const ctrl3 = component.productForm.get('rating');
    ctrl?.setValue(200);
    ctrl1?.setValue('Apple');
    ctrl2?.setValue('Fruits');
    ctrl3?.setValue('5');

    fixture.detectChanges();
    expect(el.nativeElement.disabled).toBeFalsy();
  });
});
