import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';



const ModuleRoutes: Routes = [
    {path: 'products', component: ProductComponent}
];

export const ProductRouting = RouterModule.forChild(ModuleRoutes);