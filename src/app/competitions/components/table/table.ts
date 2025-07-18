import { Component, input } from '@angular/core';
import { Standing } from '../../../models/standing';

@Component({
  selector: 'app-positions-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  standings = input.required<Standing[]>();
}
