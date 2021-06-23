import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './templates/fileupload/fileupload.component';
import { ProfilesComponent } from './templates/profiles/profiles.component';
import { HomeComponent } from './views/homepage/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfilesComponent},
  { path: 'file', component: FileuploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }