import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
import {
  faPencilAlt,
  faTrashAlt,
  faBell,
  faBellSlash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onSelectEdit: EventEmitter<Todo> = new EventEmitter();

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faBell = faBell;
  faBellSlash = faBellSlash;
  remind = false;
  date = '';
  time = '';

  constructor() {}

  ngOnInit(): void {
    this.remind = this.todo.reminder;
    this.date = this.todo.doDay.split('T')[0];
    this.time = this.todo.doDay.split('T')[1];
    this.genrateDoDaydisplay(this.date);
  }
  toEdit(todo: Todo): void {
    this.onSelectEdit.emit(todo);
  }
  onDelete(todo: Todo): void {
    this.onDeleteTodo.emit(todo);
  }
  onToggle(todo: Todo): void {
    this.onToggleTodo.emit(todo);
    this.remind = this.todo.reminder;
  }
  genrateDoDaydisplay(date: string) {
    const today = new Date().toLocaleDateString();
    const [tDay, tMonth, tYear] = today.split('.');
    const [year, month, day] = date.split('-');

    if (tYear === year && tMonth === month) {
      if (tDay === day) {
        this.date = 'Today';
        return;
      }
      if (Number(day) - Number(tDay) === 1) {
        this.date = 'Tomorrow';
      }
    }
    return;
  }
}
