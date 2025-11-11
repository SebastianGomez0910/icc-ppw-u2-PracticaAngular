import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from '../services/proyectos-service';
import { ListadoProyectos } from '../../proyecto-page/components/listado-proyectos/listado-proyectos';
import { AddProyecto } from '../../proyecto-page/components/add-proyecto/add-proyecto';
@Component({
  selector: 'app-proyecto-dos-page',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyecto-dos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoDosPage {


  proyectoService=inject(ProyectosService);
 }
