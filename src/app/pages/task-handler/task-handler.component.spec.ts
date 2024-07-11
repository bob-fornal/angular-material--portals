import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHandlerComponent } from './task-handler.component';

describe('TaskHandlerComponent', () => {
  let component: TaskHandlerComponent;
  let fixture: ComponentFixture<TaskHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
