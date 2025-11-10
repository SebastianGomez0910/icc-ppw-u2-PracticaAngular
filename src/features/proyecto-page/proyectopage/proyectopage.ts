import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Proyecto{
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-proyectopage',
  imports: [],
  templateUrl: './proyectopage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyectopage {
  
  name=signal('');
  descripcion=signal('');

  proyectos=signal<Proyecto[]>([
    {
      id: 1,nombre: 'Proyecta A',
      descripcion:'descripcion'
    }
  ])

  changeName(value: string){
    this.name.set(value);
  }
  changeDescription(value: string){
    this.descripcion.set(value);
  }

  addProyecto(){
      const newProyecto: Proyecto={
      id: this.proyectos.length+1,
      nombre:this.name(),
      descripcion:this.descripcion()
    };
    this.proyectos.set([...this.proyectos(),newProyecto]);
    this.name.set('');
    this.descripcion.set('');
  }
 }
