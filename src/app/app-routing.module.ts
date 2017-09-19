import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodosComponent } from './todos/todos.component';
import { CanActivateTodosGuard } from './can-activate-todos.guard';
import { TodosResolver } from './todos.resolver';

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
      CanActivateTodosGuard
    ],
    resolve: {
      todos: TodosResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateTodosGuard,
    TodosResolver
  ]
})
export class AppRoutingModule { }
