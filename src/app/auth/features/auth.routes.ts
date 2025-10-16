
import { Router } from '@angular/router';

export default[
    {
        //rutas
        path:'sign-in',
        loadComponent:()=>import('./sign-in/sign-in.component').then(c=>c.SignInComponent)
    },
     {
        path:'sign-up',
        loadComponent:()=>import('./sign-up/sign-up.component').then(c=>c.SignUpComponent)
    },
]
