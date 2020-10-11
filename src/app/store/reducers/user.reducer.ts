

import { createReducer, on, createFeatureSelector } from '@ngrx/store';
import * as actions from '../actions';
import { User, Usuario } from '../../models/user.model';

import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';


// Entity Adapter

export const usuarioAdapter = createEntityAdapter<Usuario>();

export interface UserState extends EntityState<Usuario>{
    error: any;
};

// const inicialUser = {
//     ids:[],
//     entities: {
//         null: {
//             id: null,
//             nombre: null
//         }
//     }
// }

export const initialState : UserState = usuarioAdapter.getInitialState({
    error: undefined
});

export function usuarioReducer(
    state: UserState = initialState,
    action: actions.UserActions
){

    switch (action.type){

        case actions.CREATE:
            return usuarioAdapter.addOne(action.usuario, state);
        
        case actions.DELETE:
            return usuarioAdapter.removeOne(action.id, state);

        default:
            return state;
    }
}

// Revisar Esta parte --

export const getUsuarioState = createFeatureSelector<UserState>('usuarios');

export const {
    
    selectIds,
    selectEntities,
    selectAll,
    selectTotal

} = usuarioAdapter.getSelectors(getUsuarioState);





// export const initialState: UsuarioState = {
//    usuario   : [],
// }

// const _userReducer = createReducer(initialState,

//     on( crearUsuario, (state , { usuario }) => ({
//          ...state,
//         usuario: usuario,

    
//     })),

// );

// export function userReducer(state, action) {
//     return _userReducer(state, action);
// }