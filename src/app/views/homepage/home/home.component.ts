import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfilesComponent } from 'src/app/containers/profiles/profiles.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private fileForm: FormGroup;

  constructor() {
    
   }

  ngOnInit(): void {

  }
    
  public changeTab($event) {
    this.fileForm.patchValue({ type: $event.index === 0 ? 'feed' : 'story' });
  }



}
