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

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

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
      active: true,
    };

    this.todoService.addTodo(newTodo).subscribe();

    this.text = '';
    this.doDay = '';
    this.reminder = false;
  }
}
