import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconButtonComponent} from "./icon-button/icon-button.component";
import { UtilsModule } from "@solenopsys/uimatrix-utils";


@NgModule({
  imports: [CommonModule, UtilsModule],
  exports: [
    IconButtonComponent
  ],
  declarations: [IconButtonComponent]
})
export class FuiIconsModule {
}
