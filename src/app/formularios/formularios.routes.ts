
import { Router } from '@angular/router';

export default[
    {
        //rutas
        path:'distancia',
        loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
    },
     {
        path:'zodiaco',
        loadComponent:()=>import('./zodiaco/zodiaco.component').then(c=>c.ZodiacoComponent)
    },
     {
        path:'aporb',
        loadComponent:()=>import('./aporb/aporb.component').then(c=>c.AporbComponent)
    },
]
