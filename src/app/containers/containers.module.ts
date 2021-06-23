import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { TableScheduleComponent } from './table-schedule/table-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent,
    ProfilesComponent,
    FileuploadComponent,
    TableScheduleComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    NgxFileDropModule,
    ReactiveFormsModule,
  
   

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProfilesComponent,
    FileuploadComponent,
    TableScheduleComponent
  ]
})
export class ContainersModule { }
