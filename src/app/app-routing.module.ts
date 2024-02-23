import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginComponent } from './steps/login.component';
import { InstructionsComponent } from './steps/instructions.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyRouteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
