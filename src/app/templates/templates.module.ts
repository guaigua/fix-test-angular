import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MaterialModule } from '../shared/modules/material/material.module';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent,
    ProfilesComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
   

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProfilesComponent
  ]
})
export class TemplatesModule { }
