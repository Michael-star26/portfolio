import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageMeComponent } from './message-me.component';

describe('MessageMeComponent', () => {
  let component: MessageMeComponent;
  let fixture: ComponentFixture<MessageMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
