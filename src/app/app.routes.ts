import {RouterModule, Routes } from '@angular/router';

import {UserComponent} from './pages/user/user.component';


const appRoutes: Routes = [
    {
        path:'products',
        children: [
            { path: 'products', loadChildren: 'app/pages/product/product.module#ProductModule'}
        ]
    },
    {
        path:'users',
        children: [
            { path: 'users',  loadChildren: 'app/pages/user/user.module#UserModule'}
        ]
    },
    {
        path:'home',
        children: [
            { path: 'home',  loadChildren: 'app/pages/home/home.module#HomeModule'}
        ]
    },
    {
        path:'**', redirectTo:''
    }
    
];

export const appRouting = RouterModule.forRoot(appRoutes);