import { Routes } from "@angular/router";
import { Formulario } from "../formulario/formulario/formulario";
import { FormulariosDinamicosComponent } from "./formularios-dinamicos/formularios-dinamicos/formularios-dinamicos";
import { FormularioMore } from "../formularios-more/formulario-more/formulario-more";

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formularios Básicos', 
        component: Formulario, 
      },
      {
        path: 'dynamic', 
        title: 'Formularios Dinámicos',
        component: FormulariosDinamicosComponent,
      },
      {
        path: 'more', 
        title: 'Formularios more',
        component: FormularioMore,
      },
      {
        path: '**', 
        redirectTo: 'basic',
      }
    ],
  },
];