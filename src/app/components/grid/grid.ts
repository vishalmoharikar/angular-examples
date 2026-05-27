import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'vmin-grid',
  imports: [],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid implements OnInit {
  columnList = input.required<string[]>(); //is a signal
  tableData = input.required<any[]>(); //is a signal  

  ngOnInit(): void {
   
  }

}
