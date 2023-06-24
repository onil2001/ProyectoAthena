import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoreadoComponent } from './coloreado.component';

describe('ColoreadoComponent', () => {
  let component: ColoreadoComponent;
  let fixture: ComponentFixture<ColoreadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoreadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoreadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
