

import { createReducer, on } from '@ngrx/store';
import { cargarMenu, cargarMenuError, cargarMenuExito } from '../actions';
import { Comida } from '../../models/comida.model';

export interface MenuState {
    platos    : Comida[],
    loaded    : boolean,
    loading   : boolean,
    error     : any
}

export const menuInitialState: MenuState = {
    platos    : [],
    loaded    : false,
    loading   : false,
    error     : null
}

const _menuReducer = createReducer( menuInitialState,

    on( cargarMenu, state => ({ ...state, loading: true })),
    
    
    on( cargarMenuExito, (state, { platos }) => ({
         ...state,
        loading: false ,
        loaded: true,
        platos: [...platos]
    })),

    on( cargarMenuError, (state, { payload }) => ({
         ...state,
        loading: false ,
        loaded: false,
        error: payload
    })),

);

export function menuReducer(state, action) {
    return _menuReducer(state, action);
}