import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureMathComponent } from './pure-math.component';

describe('PureMathComponent', () => {
  let component: PureMathComponent;
  let fixture: ComponentFixture<PureMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureMathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
