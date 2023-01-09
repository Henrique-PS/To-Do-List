import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddItemComponent } from './todo-input-add-item.component';

describe('TodoInputAddItemComponent', () => {
  let component: TodoInputAddItemComponent;
  let fixture: ComponentFixture<TodoInputAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
