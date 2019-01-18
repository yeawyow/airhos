import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { HomeComponent } from './componant/home/home.component';

const routes: Routes = [
  {path : '' ,redirectTo : AppURL.Home,pathMatch : 'full'},
  {path : AppURL.Home, component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
