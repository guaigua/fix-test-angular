import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { ScheduleAPIService } from './shared/services/schedule-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/modules/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HomepageModule } from './views/homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent, 

  ],
  imports: [
    HomepageModule,
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    NgxFileDropModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(ScheduleAPIService, { delay: 500 }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    
  ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
