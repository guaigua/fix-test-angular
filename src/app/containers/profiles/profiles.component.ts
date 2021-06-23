import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  public channels: any = [];
  public selectedChannel: any = {};
  public fileForm: FormGroup;

  constructor(private http: HttpClient) { 
    this.fileForm = new FormBuilder().group({
      channel: null,
      image: null,
      date: [new Date()],
      type: null,
    });
  }


  ngOnInit(): void {
    this.getChannels();  
  }

  public getChannels(){
    this.http.get('api/channels').subscribe((channels) => {
      this.selectedChannel = channels[0];
      this.channels = channels;
      this.fileForm.patchValue({ channel: channels[0] });
      this.selectChannel( channels[0]);
    });

  }

  public selectChannel(channel) {
    this.selectedChannel = channel;

    console.log(this.selectedChannel);
  }

}
