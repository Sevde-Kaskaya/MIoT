import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';
import { DeviceResolverService } from './resolver/device-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  { path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'home/:user_id', resolve: { user: DataResolverService }, loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'app', loadChildren: () => import('./pages/app/app.module').then(m => m.AppPageModule) },
  { path: 'newproject', loadChildren: () => import('./pages/newproject/newproject.module').then(m => m.NewprojectPageModule) },
 {
    path: 'projectdetail/:prj_id',
    resolve: 
    { project: DataResolverService},
    loadChildren: () => import('./pages/projectdetail/projectdetail.module').then(m => m.ProjectdetailPageModule)
  },
  {
    path: 'projectdetail/:prj_id/:var_id',
    resolve: 
    { project: DataResolverService, variable: DeviceResolverService},
    loadChildren: () => import('./pages/projectdetail/projectdetail.module').then(m => m.ProjectdetailPageModule)
  },
  {
    path: 'createapp',
    loadChildren: () => import('./pages/createapp/createapp.module').then( m => m.CreateappPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [DataResolverService]
})
export class AppRoutingModule { }
