import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArViewRoutingModule } from './ar-view-routing.module';
import { ArViewComponent } from './ar-view.component';
import { IonicModule } from '@ionic/angular';
import { ARLauncherPage } from '../ar-launcher/ar-launcher.page';


@NgModule({
  declarations: [
    ArViewComponent,
    ARLauncherPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    ArViewRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArViewModule { }
