import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FDataTableComponent } from './list/f.datatable.component';
import { FCardComponent } from './card/f.card.component';



@NgModule({
    declarations:[
        FDataTableComponent,
        FCardComponent
    ],
    imports:[
        CommonModule,
        NgxDatatableModule
    ],
    exports:[
        FDataTableComponent,
        FCardComponent
    ]
})

export class FrameworkModule {

}