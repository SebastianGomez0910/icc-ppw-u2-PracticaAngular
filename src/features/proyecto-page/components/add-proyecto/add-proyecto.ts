import { ChangeDetectionStrategy, Component,output,signal } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto-int';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class AddProyecto {
  name=signal('');
  descripcion=signal('');

  newProyecto=output<Proyecto>();
  removeProyecto=output<number>();

    changeName(value: string){
      this.name.set(value);
    }
    changeDescription(value: string){
      this.descripcion.set(value);
    }

  addProyecto(){

    const newProyecto: Proyecto={
      id:Math.floor(Math.random()*100),
      nombre: this.name(),
      descripcion:this.descripcion()
    };
    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.descripcion.set('');

  }

  emitRemoveById(id: number) {
        this.removeProyecto.emit(id);
    }
 }
