import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from 'environments/environment';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SessionService } from 'app/session.service';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private session: SessionService
  ) {
  }

  public signIn(username: string, password: string) {
    return this.http
      .post(API_URL + '/sign-in', {
        username,
        password
      })
      .map(response => response.json())
      .catch(this.handleError);
  }

  public getAllTodos(): Observable<Todo[]> {
    const options = this.getRequestOptions();
    return this.http
      .get(API_URL + '/todos', options)
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .post(API_URL + '/todos', todo, options)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: number): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .get(API_URL + '/todos/' + todoId, options)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo, options)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    const options = this.getRequestOptions();
    return this.http
      .delete(API_URL + '/todos/' + todoId, options)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  private getRequestOptions() {
    const headers = new Headers({
      'Authorization': 'Bearer ' + this.session.accessToken
    });
    return new RequestOptions({ headers });
  }
}
