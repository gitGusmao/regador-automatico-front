import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFlowerComponent } from './log-flower.component';

describe('LogFlowerComponent', () => {
  let component: LogFlowerComponent;
  let fixture: ComponentFixture<LogFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogFlowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
