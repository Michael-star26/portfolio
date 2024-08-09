import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitestingComponent } from './apitesting.component';

describe('ApitestingComponent', () => {
  let component: ApitestingComponent;
  let fixture: ComponentFixture<ApitestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApitestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApitestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
