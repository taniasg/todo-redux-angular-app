import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtros } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filter: filtros;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(({ todos, filters }) => {
      this.todos = todos;
      this.filter = filters;
    })
  }

}
