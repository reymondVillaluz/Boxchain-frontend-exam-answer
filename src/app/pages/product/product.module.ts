import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductRouting } from './product.routes';
import { ProductService } from './product.service';
import { FrameworkModule } from '../../framework/framework.module';

@NgModule({
    declarations:[
        ProductComponent
    ],
    imports:[
        FrameworkModule,
        ProductRouting
    ],
    providers:[ProductService]
})

export class ProductModule {

}