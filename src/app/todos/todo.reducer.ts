import { createReducer, on, State } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo("Learn Redux"),
    new Todo("Learn React"),
    new Todo("Learn Redux with Angular")
];

const _todoReducer = createReducer(initialState,
    on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(actions.eliminar, (state, { id }) => state.filter(todo => todo.id != id)),
    on(actions.eliminarCompletados, state => state.filter(todo => !todo.completado)),
    on(actions.toggleAll, (state, { completado }) =>
        state.map(todo => ({
            ...todo,
            completado: completado
        }))
    ),
    on(actions.toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        })
    }),
    on(actions.editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        })
    }),
)

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}