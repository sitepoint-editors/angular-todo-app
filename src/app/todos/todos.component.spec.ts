import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { TodoDataService } from '../todo-data.service';
import { ApiService } from '../api.service';
import { ApiMockService } from '../api-mock.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodosComponent
      ],
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
