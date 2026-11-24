
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {

  @Input() datos: any[] = [];

  displayedColumns: string[] = [];

  ngOnChanges() {
    if (this.datos.length > 0) {
      this.displayedColumns = Object.keys(this.datos[0]);
    } else {
      this.displayedColumns = [];
    }
  }
}
