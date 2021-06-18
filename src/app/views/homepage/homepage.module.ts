import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ScheduleAPIService } from 'src/app/shared/services/schedule-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    NgxFileDropModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(ScheduleAPIService, { delay: 500 }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class HomepageModule { }
