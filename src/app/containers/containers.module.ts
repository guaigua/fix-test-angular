import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent,
    ProfilesComponent,
    FileuploadComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    NgxFileDropModule,
   

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProfilesComponent,
    FileuploadComponent
  ]
})
export class ContainersModule { }
