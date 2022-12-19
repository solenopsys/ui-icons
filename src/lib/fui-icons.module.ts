import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconButtonComponent} from "./icon-button/icon-button.component";
import { UtilsModule } from "@solenopsys/uimatrix-utils";
import {DunamicIconComponent} from "./dunamic-icon/dunamic-icon.component";
import {ClipboardModule} from "ngx-clipboard";


@NgModule({
  imports: [CommonModule, UtilsModule, ClipboardModule],
  exports: [
    IconButtonComponent,DunamicIconComponent
  ],
  declarations: [IconButtonComponent,DunamicIconComponent]
})
export class FuiIconsModule {
}
