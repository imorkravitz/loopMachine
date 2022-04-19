import {Component, OnInit} from '@angular/core';
import { PeriodicElement } from './table-data.model'

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Clip 1A', symbol: 'H'},
  {position: 2, name: 'Clip 2A', symbol: 'He'},
  {position: 3, name: 'Clip 3A', symbol: 'Li'},
  {position: 4, name: 'Clip 4A', symbol: 'Be'},
  {position: 5, name: 'Clip 5A', symbol: 'B'},
  {position: 6, name: 'Clip 6A', symbol: 'C'},
  {position: 7, name: 'Clip 7A', symbol: 'N'},
  {position: 8, name: 'Clip 8A', symbol: 'O'},
  {position: 9, name: 'Clip 9A', symbol: 'F'}];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;

  selectedRowIndex = 0;
  selectedRowIndex1 = 1;
  selectedRowIndex2 = 2;
  selectedRowIndex3 = 3;
  selectedRowIndex4 = 4;
  selectedRowIndex5 = 5;
  selectedRowIndex6 = 6;
  selectedRowIndex7 = 7;
  selectedRowIndex8 = 8;
  ngOnInit(): void{
}

}
