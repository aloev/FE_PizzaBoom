import { createSelector } from '@ngrx/store';
import * as fromUSer from './user.reducer';
import * as fromMenu from './menu.reducer';


export * from './menu.reducer';
export * from './orden.reducer';
export * from './user.reducer';



// Selectores - No funcionan

// export const getStateD = createSelector(
//     selectEntities,
//     selectIds
// );

// export const getsom = createSelector( getStateD , getIds );

