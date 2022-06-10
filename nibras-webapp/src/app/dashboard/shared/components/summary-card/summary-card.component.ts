import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {

  constructor() { }

  // below difine the summary cards values inputs. the default value is 0
  @Input() totalOrders: Number = 0;
  @Input() totalExpenses: Number = 0;
  @Input() totalRevenue: Number = 0;
  @Input() NewUsers: Number = 0;

  ngOnInit(): void {
  }

}
