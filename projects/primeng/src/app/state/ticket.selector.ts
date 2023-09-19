import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TicketState } from "./ticket.reducer";

export const selectTicketState = createFeatureSelector<TicketState>('tickets');

export const selectAllTickets = createSelector(
    selectTicketState,
    (state) => state.tickets
);
