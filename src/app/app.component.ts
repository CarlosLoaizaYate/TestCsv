import { Component } from '@angular/core';
import { Datos } from './datos';

import { ArchivosService } from './archivos.service';
import { ArchivoCargado } from './archivo-cargado';
import { NombreColumnas } from './nombre-columnas';
import { ValorColumnas } from './valor-columnas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  datos: ArchivoCargado[] = [];
  // dato = {} as ArchivoCargado;
  dato: ArchivoCargado[] = [];
  nombresColumnas: NombreColumnas[] = [];
  valoresColumnas: ValorColumnas[] = [];
  title = 'TestCsv';

  constructor(private archivosService: ArchivosService) { }

  ngOnInit(): void {

    // Accedemos a los datos usando el servicio 'DatosService' 
    this.archivosService.getArchivosCargados().subscribe((datos: any) => {
      this.datos = datos;
    });

  }

  SelectFile(id: number) {
    this.archivosService.getArchivosId(id).subscribe((datos: any) => {
      this.dato = datos;
      this.nombresColumnas = datos.columnsNameFile;
      this.valoresColumnas = datos.columnsNameFile.columnsValueFile;
      console.log(datos); // Mostramos los datos en la consola

    });
  }
}
