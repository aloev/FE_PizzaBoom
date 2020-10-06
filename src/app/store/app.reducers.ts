

import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   menu: reducers.MenuState 
}



export const appReducers: ActionReducerMap<AppState> = {
   menu: reducers.menuReducer
}