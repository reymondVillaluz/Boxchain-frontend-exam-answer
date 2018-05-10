import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserRouting } from './user.routes';

import { FrameworkModule } from '../../framework/framework.module';


@NgModule({
    declarations:[
        UserComponent
    ],
    imports:[
        FrameworkModule,
        UserRouting
    ],
    providers:[
        UserService
    ]
})

export class UserModule {

}