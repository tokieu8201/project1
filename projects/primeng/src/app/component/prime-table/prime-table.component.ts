import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.css']
})
export class PrimeTableComponent implements OnInit{
  @Input()
  data: any[] = [];

  @Input()
  columns: any[] = [];

  @Input()
  customBodyTemplate!: TemplateRef<any>;

  @Input()
  customCaptionTemplate!: TemplateRef<any>;

  constructor() { }
  ngOnInit() {
      
  }
}
