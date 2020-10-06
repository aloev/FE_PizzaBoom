import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MenuActions from '../actions/menu.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { DashboardService } from '../../services/dashboard.service';


@Injectable()
export class MenuEffects {


    constructor(

        private actions$: Actions,
        private dashServicio : DashboardService

    ){}

    cargarMenu$ = 
    
        createEffect(() => {
            
            return this.actions$.pipe(
            ofType( MenuActions.cargarMenu ),
            mergeMap( 
                () => this.dashServicio.getMenu()
                .pipe(
                    map( losplatos => MenuActions.cargarMenuExito({platos: losplatos}))
                    )
                )
            )
                }
    )

}