import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiFormComponent } from './feature/api-form/api-form.component'; 
import { HeaderComponent } from './feature/header/header.component';
import { PipesComponent } from './feature/pipes/pipes.component';
import { FetchSameResolver } from './feature/resolver/fetch-same.resolver';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent
  },
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'data',
    component:ApiFormComponent,
    resolve : { datas : FetchSameResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
