import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'fui-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {


    @Input()
    icon: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

}



