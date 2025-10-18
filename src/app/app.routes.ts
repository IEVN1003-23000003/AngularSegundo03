import { Routes } from '@angular/router';
import authRoutes from './auth/features/auth.routes';

export const routes: Routes = [
    /*son las rutas hijas de este documento*/
    {
        path: 'auth',
        loadChildren: () =>
            /*la m funciona con cualquier otra letra y significa:
        Lo que tenemos como parametro        pasa a la m    */
            import('./auth/features/auth.routes').then((m) => m.default),
    },
    {
        path: 'formularios',
        loadChildren: () =>
            import('./formularios/formularios.routes').then((m) => m.default),
    },
    {
        path: 'utl',
        loadChildren: () =>
            import('./utl/utl.routes').then((m) => m.default),
    },




];
