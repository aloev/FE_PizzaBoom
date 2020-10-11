

import { createAction, props } from '@ngrx/store';

import { Action } from '@ngrx/store';
import { User, Usuario } from '../../models/user.model';

export const CREATE = '[Usuarios] Crear'
export const DELETE = '[Usuarios] Eliminar'

export class CrearUsuario implements Action {

    readonly type = CREATE;
    constructor(public usuario: Usuario){}
}

export class EliminarUsuario implements Action {

    readonly type = DELETE;
    constructor(public id: string){}
}



export type UserActions = CrearUsuario | EliminarUsuario ;


// export const crearUsuario = createAction(
//     '[nameSpace] actionDescription',
//     props<{ usuario: Usuario[] }>()
// );





// export const action2Success = createAction(
//     '[nameSpace] action2Description Success',
//     props<{payload2Type}>()
// );

// export const action3Failure = createAction(
//     '[nameSpace] action3Description Failure',
//     props<{payload3Type}>()
// );
