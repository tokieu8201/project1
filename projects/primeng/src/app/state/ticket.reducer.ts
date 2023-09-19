import { createReducer, on } from "@ngrx/store";
import { Ticket } from "../models/ticket.model";
import { loadTicketSuccess, updateTicketSuccess } from "./ticket.action";

export interface TicketState{
    tickets: Ticket[],
}

export const initialState: TicketState = {
    tickets: [],

}

export const ticketReducer = createReducer(
    initialState,
    on(loadTicketSuccess, (state, { tickets }) => ({
        ...state, tickets
    })),
    
    on(updateTicketSuccess, (state, { ticket }) => ({
        ...state,
        tickets: state.tickets.map((t) => (t.id === ticket.id ? ticket : t))
    }))
);