import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Ticket } from '../../../models/ticket.model';
import { selectAllTickets } from '../../../state/ticket.selector';
import { loadTickets } from '../../../state/ticket.action';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  tickets$: Observable<Ticket[]>;
  
  selectedTicket: Ticket | null = null;
  cols!: Column[];
  status!: any[];

  @Input()
  customBodyTemplate!: TemplateRef<any>;
  
  @Input()
  customCaptionTemplate!: TemplateRef<any>;
  
  constructor(private store: Store<{ tickets: Ticket[] }>) {
    this.tickets$ = this.store.select(selectAllTickets);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTickets());
    
    this.cols = [
      {field: 'status', header: 'Status'},
      {field: 'delivered', header: 'Delivered'},
      {field: 'returned', header: 'Returned'},
      {field: 'chemical', header: 'Chemical'},
      {field: 'supplier', header: 'Supplier'},
      {field: 'trailer', header: 'Trailer'},
      {field: 'delivered_qty', header: 'Delivered Qty'},
      {field: 'current_qty', header: 'Current Qty'},
      {field: 'returned_qty', header: 'Returned Qty'},
      {field: 'net', header: 'Net'},
      {field: 'bol', header: 'Bol'},
      {field: 'equipment', header: 'Equipment'},
      {field: 'delivery_type', header: 'Delivery type'},
      {field: 'pad', header: 'Pad'},
      {field: 'action', header: '' }
    ];

    this.status = [
      { name: 'Off Location', class: 'off-location'},

    ]

  }
  showDialog(ticket: Ticket) {
    this.selectedTicket = { ...ticket };    
  }

  getCountByStatus(status: string): Observable<number> {
    return this.tickets$
      .pipe(
        map(tickets => tickets.filter(ticket => ticket.status === status).length)
      );
  }
  
}
