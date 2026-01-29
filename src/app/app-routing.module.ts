import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ar-view', pathMatch: 'full' },
  { path: 'ar-view', loadChildren: () => import('./features/ar-view/ar-view.module').then(m => m.ArViewModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
