import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIControlsModule} from "@solenopsys/uimatrix-controls";
import {UtilsModule} from "@solenopsys/uimatrix-utils";
import {DunamicIconComponent} from "./dunamic-icon/dunamic-icon.component";
import {ClipboardModule} from "ngx-clipboard";
import {SubMenuComponent} from "./sub-menu/sub-menu.component";
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';

import {UtilsGlobalsModule} from "@solenopsys/lib-globals";
import {IconsPageComponent} from "./icons-page/icons-page.component";
import {IconsSectionPageComponent} from "./icons-section-page/icons-section-page.component";


const routes: Routes = [
    {path: '', redirectTo: '01-Interface-Essential', pathMatch: 'full'},

    {
        path: 'icons',
        component: IconsPageComponent,
        children: [{path: ':section', component: IconsSectionPageComponent}]
    },

];

export const PROVIDERS_CONF = [
    {provide: 'assets_dir', useValue: "/fm/modules/alexstorm/icons"},
    {provide: 'mod_name', useValue: "icons"}
]

export const IMPORTS_CONF = [
    BrowserModule,
    RouterModule,
    ClipboardModule,
    CommonModule, UtilsModule, ClipboardModule, UIControlsModule,
    RouterModule.forChild(routes),
]


@NgModule({
    declarations: [IconsPageComponent, IconsSectionPageComponent,DunamicIconComponent,SubMenuComponent],
    imports: [
        ...IMPORTS_CONF,
        UtilsGlobalsModule,

    ],
    providers: [...PROVIDERS_CONF],
    bootstrap: [],
    exports: [DunamicIconComponent, SubMenuComponent]
})
export class UIIconsModule {
}



