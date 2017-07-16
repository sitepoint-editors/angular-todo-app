import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {

  public todos$: Observable<Todo[]>;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.todos$ = this.route.data
      .map((data) => data['todos']);
  }

}
