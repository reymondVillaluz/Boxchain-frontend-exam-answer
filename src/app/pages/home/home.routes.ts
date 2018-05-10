import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const ModuleRoutes: Routes = [
     {path: 'home', component: HomeComponent}
]
export const HomeRouting = RouterModule.forChild(ModuleRoutes);