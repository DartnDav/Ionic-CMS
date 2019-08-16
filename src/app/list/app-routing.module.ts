import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'user/:id', loadChildren: './user/user.module#UserPageModule' },
  { path: 'user-create', loadChildren: './user-create/user-create.module#UserCreatePageModule' },
  { path: 'user-edit/:id', loadChildren: './user-edit/user-edit.module#UserEditPageModule' },
  { path: 'user-delete/:id', loadChildren: './user-delete/user-delete.module#UserDeletePageModule' },
  { path: 'user-delete', loadChildren: './user-delete/user-delete.module#UserDeletePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
