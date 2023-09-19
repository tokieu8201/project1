import { createAction, props } from "@ngrx/store";
import { Ticket } from "../models/ticket.model";

export const loadTickets = createAction('[Ticket] Load tickets');

export const loadTicketSuccess = createAction(
    '[Ticket] Load tickets success',
    props<{ tickets: Ticket[] }>()
)

export const updateTicket = createAction(
    '[Ticket] Update Ticket',
    props<{ ticket: Ticket }>()
);

export const updateTicketSuccess = createAction(
    '[Ticket] Update Ticket Success',
    props<{ ticket: Ticket }>()
);

