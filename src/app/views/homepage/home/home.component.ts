import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfilesComponent } from 'src/app/containers/profiles/profiles.component';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private fileForm: FormGroup;
  type: string = 'feed';

  constructor(public dataService:DataService,) {
    
   }

  ngOnInit(): void {
    this.dataService.type = this.type;
  }
    
  public changeTab($event) {   
    this.type = $event.index === 0 ? 'feed' : 'story';
    this.dataService.type = this.type;
  }



}
