import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevComponent } from './game-dev.component';

describe('GameDevComponent', () => {
  let component: GameDevComponent;
  let fixture: ComponentFixture<GameDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
