import { Component, Input } from '@angular/core';

@Component({
    selector: 'f-card',
    templateUrl: './f.card.component.html',
    styleUrls: ['./f.card.component.scss']
})

export class FCardComponent{
    @Input() rows : any;
    @Input() usercon: any;
    @Input() displayName: string;

    constructor(){
        
    }

    ngOnInit(){

    }
}