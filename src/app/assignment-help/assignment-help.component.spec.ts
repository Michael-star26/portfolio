import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentHelpComponent } from './assignment-help.component';

describe('AssignmentHelpComponent', () => {
  let component: AssignmentHelpComponent;
  let fixture: ComponentFixture<AssignmentHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
