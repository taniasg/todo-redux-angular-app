import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filtro/filtro.reducer';
import { filtros } from './filtro/filtro.actions';

export interface AppState {
    todos: Todo[],
    filters: filtros
}

export const appReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filters: filterReducer
}