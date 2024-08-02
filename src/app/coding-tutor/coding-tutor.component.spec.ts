import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingTutorComponent } from './coding-tutor.component';

describe('CodingTutorComponent', () => {
  let component: CodingTutorComponent;
  let fixture: ComponentFixture<CodingTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
