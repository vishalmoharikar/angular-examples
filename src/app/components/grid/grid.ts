import { Component, ContentChild, input, OnInit, TemplateRef } from '@angular/core';
import { ColumnType, GridOptions } from '../models/grid-model';
import { KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import { GridSortingUtil } from './grid-sorting-util';
import { GenderpipePipe } from '../../pipes/genderpipe-pipe';
import { BooleanpipePipe } from '../../pipes/booleanpipe-pipe';

@Component({
  selector: 'vmin-grid',
  imports: [KeyValuePipe, NgTemplateOutlet, GenderpipePipe, BooleanpipePipe],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid implements OnInit {

  colType = ColumnType; //to use enum in template
  gridOptions = input.required<GridOptions>(); //is a signal

  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  @ContentChild(TemplateRef) actionTemplate?: TemplateRef<any>;

  ngOnInit(): void {

  }

  sortGrid(columnKey: string): void {
    const sortState = GridSortingUtil.updateSortState(
      columnKey,
      this.sortColumn,
      this.sortDirection
    );

    this.sortColumn = sortState.sortColumn;
    this.sortDirection = sortState.sortDirection;
    let factor = this.sortDirection === 'asc' ? 1 : -1;

    GridSortingUtil.sortGrid(columnKey, this.gridOptions(), factor);
  }

  filterGrid(event: MouseEvent, columnKey: string): void {

    event.stopPropagation();

    alert('Filter:' + columnKey);
  }

}
