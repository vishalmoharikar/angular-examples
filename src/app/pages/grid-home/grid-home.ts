import { Component, OnInit } from '@angular/core';
import { Grid } from "../../components/grid/grid";

@Component({
  selector: 'app-grid-home',
  imports: [Grid],
  templateUrl: './grid-home.html',
  styleUrl: './grid-home.css',
})
export class GridHome implements OnInit {
  gridColumnList = ['name', 'age', 'city'];
  gridData = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { name: 'Michael Johnson', age: 35, city: 'Chicago' },
    { name: 'Emily Davis', age: 28, city: 'Houston' },
    { name: 'David Wilson', age: 40, city: 'Phoenix' },
  ];


  ngOnInit(): void {
    //console.log(this.columnList);
  }


}
