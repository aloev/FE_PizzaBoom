

import { createReducer, on, createFeatureSelector } from '@ngrx/store';
import { cargarMenu, cargarMenuError, cargarMenuExito } from '../actions';
import { Comida, food } from '../../models/comida.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';


// Create Adapter

export const foodAdapter: EntityAdapter<food> = createEntityAdapter<food>();

export interface TodoFoodState extends EntityState<food> {
    loaded    : boolean;
    loading   : boolean;
    error     : any;
}

export const elmenuInit: TodoFoodState = foodAdapter.getInitialState({

        loaded: false,
        loading: false,
        error: undefined,


})


// export interface MenuState {
//     platos    : Comida[],
//     loaded    : boolean,
//     loading   : boolean,
//     error     : any
// }

// export const menuInitialState: MenuState = {
//     platos    : [],
//     loaded    : false,
//     loading   : false,
//     error     : null
// }

const _menuReducer = createReducer( elmenuInit,

    on( cargarMenu, state => ({ ...state, loading: true })),
    
    
    on( cargarMenuExito, (state, { platos }) => {
        //  ...state,
        // loading: false ,
        // loaded: true,
        // platos: [...platos]
        return foodAdapter.setAll(platos, state);
        }
    ),
    on( cargarMenuError, (state, { payload }) => ({
         ...state,
        loading: false ,
        loaded: false,
        error: payload
    })),

);

export const getFoodState = createFeatureSelector<TodoFoodState>('menu');

export const {
    
    selectIds: _selectids,
    selectEntities: _selectEntities,
    selectAll: _selectAll,
    selectTotal: _selectTotal

} = foodAdapter.getSelectors(getFoodState);

export function menuReducer(state, action) {
    return _menuReducer(state, action);
}