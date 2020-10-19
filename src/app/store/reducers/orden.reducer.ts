


import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Orden } from '../../models/orden.model';
import { ejecutarOrden } from '../actions/orden.actions';


export const ordenAdapter = createEntityAdapter<Orden>();

export interface OrdenState extends EntityState<Orden>{
    error: any;
};

export const OrdeninitialState : OrdenState = ordenAdapter.getInitialState({
    error: undefined
});


export const ordenReducer = createReducer(
    OrdeninitialState,

    on(ejecutarOrden, (state, { orden}) => {
        return ordenAdapter.addOne(orden, state);
    }),

);