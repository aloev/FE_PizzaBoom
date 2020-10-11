import { createAction, props } from '@ngrx/store';
import { Comida } from '../../models/comida.model';




export const cargarMenu = createAction(
    '[Platos] Cargar Platos '
);


export const cargarMenuExito = createAction(
    '[Platos] Cargar Platos Exito',
    props<{ platos: Comida[]}>()
);

export const cargarMenuError = createAction(
    '[Platos] Cargar Platos Error',
    props<{ payload: any}>()
);