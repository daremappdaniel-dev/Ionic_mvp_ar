import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyStorePageRoutingModule } from './company-store-routing.module';

import { CompanyStorePage } from './company-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyStorePageRoutingModule
  ],
  declarations: [CompanyStorePage]
})
export class CompanyStorePageModule {}
