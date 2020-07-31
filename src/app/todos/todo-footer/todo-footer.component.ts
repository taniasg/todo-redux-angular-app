import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtros, setFilter } from '../../filtro/filtro.actions';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtros = 'all';
  filtros: filtros[] = ['all', 'active', 'completed'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {
    // this.store.select('filters').subscribe(filter => this.filtroActual = filter);
    this.store.subscribe(state => {
      this.filtroActual = state.filters;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  ngOnInit(): void {
  }

  cambiarFiltro(filtro: filtros) {
    this.store.dispatch(setFilter({ filtro }))
  }

  eliminarCompletados() {
    this.store.dispatch(actions.eliminarCompletados())
  }

}
