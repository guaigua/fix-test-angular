import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public channels: any = [];
  public selectedChannel = null;
  private fileForm: FormGroup;

  constructor(private http: HttpClient) { 
    this.fileForm = new FormBuilder().group({
      channel: null,
      image: null,
      date: [new Date()],
      type: null,
    });
  }

  public ngOnInit() { 

    $(document).ready(function () {          
      $('#dismiss, .overlay').on('click', function () {
          $('#sidebar').removeClass('active');
          $('.overlay').removeClass('active');
      });
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').addClass('active');
          $('.overlay').addClass('active');
          $('.collapse.in').toggleClass('in');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
    });


    this.http.get('api/channels').subscribe((channels) => {
      this.selectedChannel = channels[0];
      this.channels = channels;

    });
  }

  public selectChannel(channel) {
    this.selectedChannel = channel;
    // this.fileForm.patchValue({ channel });
    // console.log(this.selectedChannel);
  }



}
