import { createReducer, on } from '@ngrx/store';
import { setFilter, filtros } from './filtro.actions';

export const initialState: filtros = 'all';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state, { filtro }) => filtro),
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}