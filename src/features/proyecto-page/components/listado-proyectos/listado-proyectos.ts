import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto-int';

@Component({
  selector: 'listado-proyectos',
  imports: [],
  templateUrl: './listado-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyectos { 

  listName = input.required<string>();

  proyectos = input.required<Proyecto[]>();
}
