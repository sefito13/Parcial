
import { Component } from '@angular/core';
import { MateriasService } from '../../Services/materias';
import { Table } from '../../Components/table/table';

@Component({
  selector: 'app-materias',
  imports: [Table],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {

  materia: any[] = [];

  constructor(public materiasService: MateriasService) {

    this.materiasService.getMaterias().subscribe((data: any[]) => {

      this.materia = data;

      console.log(data);

    });

  }

}
