import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { CanActivateTodosGuard } from './can-activate-todos.guard';
import { TodosResolver } from './todos.resolver';
import { TodosPageComponent } from './todos-page/todos-page.component';

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
    component: TodosPageComponent,
    canActivate: [
      CanActivateTodosGuard
    ],
    resolve: {
      todos: TodosResolver
    }
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
export class AppRoutingModule {
}
