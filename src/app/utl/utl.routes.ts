
import { Router, Routes } from '@angular/router';

export default[
    {
        //rutas
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component').then(c=>c.AgregarComponent)
    },
     {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component').then(c=>c.AlumnosComponent)
    },
     {
        path:'editar/:matricula',
        loadComponent:()=>import('./editar/editar.component').then(c=>c.EditarComponent)
    },
    {
        path:'eliminar/:matricula',
        loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
    },
]as Routes