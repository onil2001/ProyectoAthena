import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpulsoComponent } from './impulso.component';

describe('ImpulsoComponent', () => {
  let component: ImpulsoComponent;
  let fixture: ComponentFixture<ImpulsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpulsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpulsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
