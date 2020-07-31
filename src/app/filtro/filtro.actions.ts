import { createAction, props } from '@ngrx/store';

export type filtros = 'all' | 'completed' | 'active';

export const setFilter = createAction(
    '[Filtro] Set filtro',
    props<{ filtro: filtros }>()
);