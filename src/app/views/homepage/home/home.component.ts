import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public files: NgxFileDropEntry[] = [];
  public channels: any = [];
  public schedules: any = [];
  public schedulePeriod = null;
  public selectedChannel = null;
  public displayedColumns = ['type', 'status', 'image', 'channel', 'date'];

  dataTable: any;
  private form: FormGroup;

  public constructor(private http: HttpClient) {
    this.form = new FormBuilder().group({
      channel: null,
      image: null,
      date: [new Date()],
      type: null,
    });
  }

  public ngOnInit() {
    this.form.patchValue({ type: 'feed' });
    this.http.get('api/channels').subscribe((channels) => {
      this.selectedChannel = channels[0];
      this.channels = channels;
      this.form.patchValue({ channel: channels[0] });
    });

    this.http.get('api/schedules').subscribe((scheduleResponse: any) => {
      this.schedulePeriod = {
        start_date: scheduleResponse.start_date,
        end_date: scheduleResponse.end_date,
      };
      this.schedules = scheduleResponse.data;
       this.dataTable = new MatTableDataSource(this.schedules);
    });
  }

  public selectChannel(channel) {
    this.selectedChannel = channel;
    this.form.patchValue({ channel });
  }

  public schedule() {
    if (!this.form.valid) return; // TODO: give feedback
    this.http
      .post('api/schedules', this.form.value, { responseType: 'json' })
      .subscribe((data) => {
        this.form.reset();
        this.files = [];
        this.http.get('api/schedules').subscribe((scheduleResponse: any) => {
          this.schedulePeriod = {
            start_date: scheduleResponse.start_date,
            end_date: scheduleResponse.end_date,
          };
          this.schedules = scheduleResponse.data;
        });
      });
  }

  public changeTab($event) {
    this.form.patchValue({ type: $event.index === 0 ? 'feed' : 'story' });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataTable.filter = filterValue.trim().toLowerCase();
    console.log(this.dataTable.filter);
  }

 



}
