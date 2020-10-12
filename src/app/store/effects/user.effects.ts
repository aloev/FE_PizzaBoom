import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { mergeMap, tap, map } from 'rxjs/operators';
import { DashboardService } from '../../services/dashboard.service';
import { DELETESucces, EliminarUsuarioSu } from '../actions/user.actions';
import { Usuario } from '../../models/user.model';
import { Observable } from 'rxjs';

import * as fromUActions from '../actions/user.actions';
import * as actions from '../actions';
@Injectable()
export class UsuarioEffects {


    constructor(

        private actions$: Actions,
        private dashServicio : DashboardService

    ){}

    eliminarUser$ = createEffect(
        () => {

            return this.actions$.pipe(
            ofType( fromUActions.deleteUser ),
            mergeMap( 
                (resp) => this.dashServicio.eliminarAutor(resp.id)
                .pipe(
                    map(() => fromUActions.eliminacionGood())
                    )
                )
             )
            }

        // () => {
        //     return this.actions$.pipe(
        //     ofType( fromUActions.deleteUser ),
        //     mergeMap( 
        //         (id) => this.dashServicio.eliminarAutor(id)
        //         .pipe(
        //             map( (losplatos:Usuario[]) => (new EliminarUsuarioSu(losplatos)))
        //             )
        //         )
        //     )
        //         }
    )

}