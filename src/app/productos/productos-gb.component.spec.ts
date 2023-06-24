import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosGBComponent } from './productos-gb.component';

describe('ProductosGBComponent', () => {
  let component: ProductosGBComponent;
  let fixture: ComponentFixture<ProductosGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosGBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
