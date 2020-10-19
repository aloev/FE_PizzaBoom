
import { createAction, props } from '@ngrx/store';

import { Action } from '@ngrx/store';
import { Orden } from '../../models/orden.model';


export const ejecutarOrden = createAction(

    '[Orden] generar orden',
    props<{ orden: Orden }>()

);