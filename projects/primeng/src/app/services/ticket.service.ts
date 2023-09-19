import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';

const _api = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(_api + '/ticket');
  }

  updateTicket(ticket: Ticket): Observable<Ticket>{
    return this.http.put<Ticket>(`${_api}/ticket/${ticket.id}`, ticket);
  }
}
