import { Component, input } from '@angular/core';
import { Standing } from '../../../models/standing';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-positions-table',
  imports: [RouterModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  standings = input.required<Standing[]>();
}
