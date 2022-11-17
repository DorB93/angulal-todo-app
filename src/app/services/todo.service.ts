import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:2500/todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTodos(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo._id}`;
    return this.http.delete<Todo>(url);
  }

  updateTodoReminder(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo._id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);
  }
}
