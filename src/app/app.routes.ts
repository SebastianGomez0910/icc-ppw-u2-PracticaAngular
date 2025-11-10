import { Routes } from '@angular/router';
import { Homepage } from '../features/homepage/homepage';
import { Perfilpage } from '../features/perfilpage/perfilpage';
import { Proyectopage } from '../features/proyecto-page/proyectopage/proyectopage';
import { ProyectoDosPage } from '../features/proyecto-dos-page/proyecto-dos-page/proyecto-dos-page';
//import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path:'perfil',
        component: Perfilpage
    },
    {
        path:'proyecto',
        component: Proyectopage
    },
    {
        path:'proyectoDos',
        component:ProyectoDosPage
    }
];
