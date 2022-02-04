import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { AboutComponent } from './about/about.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  { path: 'users', component: BodyComponent},
  { path: 'repositories', component: RepositoriesComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo:"users", pathMatch:"full"},
  { path:'**', component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
