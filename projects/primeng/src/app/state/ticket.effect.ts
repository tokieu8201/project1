import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { TicketService } from '../services/ticket.service';
import { loadTicketSuccess, loadTickets, updateTicket, updateTicketSuccess } from './ticket.action';
import { catchError, concatMap, delay, map, of } from 'rxjs';


@Injectable()
export class TicketEffects {
    constructor(
        private action$: Actions,
        private ticketService: TicketService
    ) { }

    loadTicket$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadTickets),
            concatMap(() =>
                this.ticketService.getTickets().pipe(
                    // delay(3000),
                    map((tickets) =>
                        loadTicketSuccess({ tickets })
                    ),
                    catchError(() => of({ type: 'Load Products Failed' }))
                )
            )
        )
    );

    updateTicket$ = createEffect(() =>
        this.action$.pipe(
            ofType(updateTicket),
            concatMap(({ ticket }) =>
                this.ticketService.updateTicket(ticket).pipe(
                    map(updatedTicket => updateTicketSuccess({ ticket: updatedTicket })),
                    catchError(() => of({ type: 'Update Failed' }))
                )
            )
        )
    );

}
