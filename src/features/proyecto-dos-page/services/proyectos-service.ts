import { effect, Injectable, signal } from '@angular/core';
import { Proyecto } from '../../proyecto-page/interfaces/proyecto-int';
import { CurrencyPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  



  constructor() { 

    effect(()=>{
      const data=this.proyectos();
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem(this.Storage_key, JSON.stringify(data));
    });
  }

  private readonly Storage_key='proyectosApp';

  //proyectos=signal<Proyecto[]>([ 
   //   {
     //   id: 1,
       // nombre: 'Proyecta A',
        //descripcion:'descripcion'
     // }
    //]);

    proyectos=signal<Proyecto[]>(this.loadProyectos());

    private loadProyectos() : Proyecto[]{
      const data=localStorage.getItem(this.Storage_key);
      return data ? JSON.parse(data) : [{
          id: 1,
          nombre: 'Proyecta A',
          descripcion:'descripcion'
      },]; 
    }

    AddProyecto(newProyecto:Proyecto){
      this.proyectos.set([...this.proyectos(), newProyecto]);
    }

    eliminarProyecto(){
      this.proyectos.set(this.proyectos().slice(1));
      
    }

}
