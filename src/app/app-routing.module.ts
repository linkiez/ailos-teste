import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { CadastroComponent } from './screens/cadastro/cadastro.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule) },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
