import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSciComponent } from './data-sci.component';

describe('DataSciComponent', () => {
  let component: DataSciComponent;
  let fixture: ComponentFixture<DataSciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
