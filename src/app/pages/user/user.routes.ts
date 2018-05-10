import {RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const ModuleRoutes: Routes = [
     {path: 'users', component: UserComponent}
]
export const UserRouting = RouterModule.forChild(ModuleRoutes);