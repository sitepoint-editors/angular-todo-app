import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

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
