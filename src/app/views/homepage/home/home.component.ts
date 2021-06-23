import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
    
  public changeTab($event) {
    this.form.patchValue({ type: $event.index === 0 ? 'feed' : 'story' });
  }
}
