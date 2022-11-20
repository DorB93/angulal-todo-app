import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { TodoService } from './../../services/todo.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() todo?: Todo;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodo();
    console.log(this.todo);
  }

  getTodo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(String(id)).subscribe((data) => {
      console.log(data._doc);
      this.todo = data._doc;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.todo) {
      this.todoService.updateTodo(this.todo).subscribe(() => this.goBack());
    }
  }
}
