import { Component, OnInit } from '@angular/core';
import { Grid } from "../../components/grid/grid";
import { GridOptions, ColumnType } from '../../components/models/grid-model';

@Component({
  selector: 'app-grid-home',
  imports: [Grid],
  templateUrl: './grid-home.html',
  styleUrl: './grid-home.css',
})
export class GridHome implements OnInit {

  gridOptions: GridOptions = {
    columns: {
      age: { displayName: 'Age', type: ColumnType.number },
      name: { displayName: 'Full Name', type: ColumnType.string },
      city: { displayName: 'City of Residence', type: ColumnType.string },
      dob: { displayName: 'Date of Birth', type: ColumnType.date },
      isGraduate: { displayName: 'Is Graduate', type: ColumnType.boolean },
      firstLoggedIn: { displayName: 'First Logged In', type: ColumnType.datetime },
      ctc: { displayName: 'CTC', type: ColumnType.number },
      gender: { displayName: 'Gender', type: ColumnType.gender },

    },
    gridData: [
      { name: 'John Doe', age: 30, city: 'New York', dob: '1993-06-15', isGraduate: true, firstLoggedIn: '2023-01-15 09:00:00', isEditable: true, ctc: 100000, gender: 'm' },
      { name: 'Jane Smith', age: 25, city: 'Los Angeles', dob: '1998-09-20', isGraduate: false, firstLoggedIn: '2023-01-16 10:00:00', isEditable: false, gender: 'f' },
      { name: 'Michael Johnson', age: 35, city: 'Chicago', dob: '1988-03-10', isGraduate: true, firstLoggedIn: '2023-01-17 11:00:00', isEditable: true },
      { name: 'Emily Davis', age: 28, city: 'Houston', dob: '2000-12-25', isGraduate: false, firstLoggedIn: '2023-01-18 12:00:00', isEditable: false },
      { name: 'David Wilson', age: 40, city: 'Phoenix', dob: '1983-07-30', isGraduate: true, firstLoggedIn: '2023-01-19 13:00:00', isEditable: true },
      { name: 'Sarah Brown', age: 22, city: 'Philadelphia', dob: '2000-01-15', isGraduate: false, firstLoggedIn: '2023-01-20 14:00:00', isEditable: false },
      { name: 'Chris Lee', age: 32, city: 'San Antonio', dob: '1991-11-20', isGraduate: true, firstLoggedIn: '2023-01-21 15:00:00', isEditable: true },
      { name: 'Jessica Taylor', age: 26, city: 'Houston', dob: '1997-04-10', isGraduate: false, firstLoggedIn: '2023-01-22 16:00:00', isEditable: false },
      { name: 'Daniel Anderson', age: 38, city: 'Dallas', dob: '1985-08-25', isGraduate: true, firstLoggedIn: '2023-01-23 17:00:00', isEditable: true }
    ],
    showButtonColumn: true
  };


  ngOnInit(): void {
    //console.log(this.columnList);
  }

  onGridButtonClick(rowData: any) {
    alert("Editing CTC for " + rowData.name);
    if (!rowData.ctc) {
      rowData.ctc = 0;
    }
    rowData.ctc = rowData.ctc + 10000; // Just for demo, incrementing CTC by 10k
  }


}
