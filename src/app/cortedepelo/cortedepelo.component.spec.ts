import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortedepeloComponent } from './cortedepelo.component';

describe('CortedepeloComponent', () => {
  let component: CortedepeloComponent;
  let fixture: ComponentFixture<CortedepeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortedepeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortedepeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
