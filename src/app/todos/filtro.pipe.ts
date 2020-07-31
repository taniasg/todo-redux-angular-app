import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtros } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtros): Todo[] {
    switch (filtro) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.completado);
      case 'completed':
        return todos.filter(todo => todo.completado)
      default:
        return todos;
    }
  }

}
