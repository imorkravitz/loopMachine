import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from './table-data.model'
import { FormControl } from '@angular/forms';

const ELEMENT_DATA: PeriodicElement[] = [
  {channel: 1, name: 'Clip 1A', mute: false},
  {channel: 2, name: 'Clip 2A', mute: false},
  {channel: 3, name: 'Clip 3A', mute: false},
  {channel: 4, name: 'Clip 4A', mute: false},
  {channel: 5, name: 'Clip 5A', mute: false},
  {channel: 6, name: 'Clip 6A', mute: false},
  {channel: 7, name: 'Clip 7A', mute: false},
  {channel: 8, name: 'Clip 8A', mute: false},
  {channel: 9, name: 'Clip 9A', mute: false}];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'table-basic',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = ['channel', 'name', 'mute'];
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

  ngOnInit(): void{}

}
