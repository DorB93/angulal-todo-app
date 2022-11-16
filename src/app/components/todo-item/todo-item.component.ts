import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleReminderTodo: EventEmitter<Todo> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
  onDelete(todo: Todo): void {
    this.onDeleteTodo.emit(todo);
  }
  onToggle(todo: Todo): void {
    this.onToggleReminderTodo.emit(todo);
  }
}
