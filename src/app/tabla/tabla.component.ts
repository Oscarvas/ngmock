import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Phnmsip1Component } from '../phnmsip1/phnmsip1.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() tableData: any[] = []; //MatTableDataSource<Object>;
  tabla: MatTableDataSource<Object>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(public dialog: MatDialog) {
    this.tabla = new MatTableDataSource<Object>(this.tableData);
  }

  ngOnInit(): void {
  }
  openDialog(fila: any) {
    this.dialog.open(Phnmsip1Component);
    console.log(fila);

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tabla.filter = filterValue.trim().toLowerCase();

    if (this.tabla.paginator) {
      this.tabla.paginator.firstPage();
    }
  }

}
