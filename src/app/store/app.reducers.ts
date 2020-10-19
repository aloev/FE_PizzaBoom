

import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { OrdenState } from './reducers/orden.reducer';


export interface AppState {
   menu: reducers.TodoFoodState,
   user: reducers.UserState,
   ordenes: reducers.OrdenState,

}



export const appReducers: ActionReducerMap<AppState> = {
   menu: reducers.menuReducer,
   user: reducers.usuarioReducer,
   ordenes: reducers.ordenReducer
}