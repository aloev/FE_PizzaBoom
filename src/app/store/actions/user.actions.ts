

import { createAction, props } from '@ngrx/store';

import { Action } from '@ngrx/store';
import { User, Usuario } from '../../models/user.model';

export const CREATE = '[Usuarios] Crear'
export const DELETE = '[Usuarios] Eliminar'
export const DELETESucces = '[Usuarios] Eliminar Success'

export class CrearUsuario implements Action {

    readonly type = CREATE;
    constructor(public usuario: Usuario){}
}

export class EliminarUsuario implements Action {

    readonly type = DELETE;
    constructor(public id: string){}
}

export class EliminarUsuarioSu implements Action {

    readonly type = DELETESucces;
    constructor(){}
}

export const deleteUser = createAction(
   
    '[Usuarios] Eliminar Success',
    props<{  id: string}>()
);
export const createUser = createAction(
   
    '[Usuarios] Crear Success',
    props<{  usuario: Usuario}>()
);

export const eliminacionGood = createAction(

    '[Usuarios] Eliminacion Exitosa',

);


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
