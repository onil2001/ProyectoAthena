import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtcabelloComponent } from './extcabello.component';

describe('ExtcabelloComponent', () => {
  let component: ExtcabelloComponent;
  let fixture: ComponentFixture<ExtcabelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtcabelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtcabelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
