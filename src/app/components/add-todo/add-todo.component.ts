import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  text: string = '';
  doDay: string = '';
  reminder: boolean = false;
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }
    if (!this.doDay) {
      alert('Please add a do date!');
      return;
    }

    const newTodo: Todo = {
      text: this.text,
      doDay: this.doDay,
      reminder: this.reminder,
      createAt: new Date().toLocaleDateString().toString(),
    };

    this.addTodo(newTodo);

    this.text = '';
    this.doDay = '';
    this.reminder = false;
  }
}
