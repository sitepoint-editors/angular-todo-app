import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodosComponent } from './todos/todos.component';
import { CanActivateTodosService } from './can-activate-todos.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [
      CanActivateTodosService
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateTodosService
  ]
})
export class AppRoutingModule { }
