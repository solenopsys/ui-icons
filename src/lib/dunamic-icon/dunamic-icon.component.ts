import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ui-dunamic-icon',
    templateUrl: './dunamic-icon.component.html',
    styleUrls: ['./dunamic-icon.component.css']
})
export class DunamicIconComponent implements OnInit {

    @Input()
    name: string | undefined;

    @Input()
    src: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

}
