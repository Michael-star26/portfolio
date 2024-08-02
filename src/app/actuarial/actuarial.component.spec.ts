import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuarialComponent } from './actuarial.component';

describe('ActuarialComponent', () => {
  let component: ActuarialComponent;
  let fixture: ComponentFixture<ActuarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActuarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActuarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
