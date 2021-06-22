import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './templates/profiles/profiles.component';
import { HomeComponent } from './views/homepage/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfilesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }