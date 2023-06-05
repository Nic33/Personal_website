import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LestonComponent } from './leston.component';

describe('LestonComponent', () => {
  let component: LestonComponent;
  let fixture: ComponentFixture<LestonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LestonComponent]
    });
    fixture = TestBed.createComponent(LestonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
