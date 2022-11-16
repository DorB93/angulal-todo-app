import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AdoutComponent } from './components/adout/adout.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
  },
  {
    path: 'about',
    component: AdoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
