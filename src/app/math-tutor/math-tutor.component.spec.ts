import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTutorComponent } from './math-tutor.component';

describe('MathTutorComponent', () => {
  let component: MathTutorComponent;
  let fixture: ComponentFixture<MathTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
