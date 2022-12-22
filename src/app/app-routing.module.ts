import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'qrcode', pathMatch: 'full'
}, {
    path: 'qrcode', loadChildren: () => import('./modeule/qr/qr.module').then(m => m.QrModule)
}, {
    path: 'team', loadChildren: () => import('./modeule/team/team.module').then(m => m.TeamModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
