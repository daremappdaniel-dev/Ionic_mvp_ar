import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyStorePage } from './company-store.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyStorePageRoutingModule {}
