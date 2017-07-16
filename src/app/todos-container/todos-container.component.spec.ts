import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosContainerComponent } from './todos-container.component';

describe('TodosContainerComponent', () => {
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
