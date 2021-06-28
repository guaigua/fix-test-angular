import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-table-schedule',
  templateUrl: './table-schedule.component.html',
  styleUrls: ['./table-schedule.component.scss']
})
export class TableScheduleComponent implements OnInit {

  // public schedules: any = [];
  @Input() schedules: any = {};
  public schedulePeriod = null;
  public displayedColumns = ['type', 'status', 'image', 'channel', 'date'];
  dataTable: any;

  public constructor(
    private http: HttpClient,
    public dataService:DataService) {}

  public ngOnInit() {
    // console.log(this.dataService.schedules);
    this.http.get('api/schedules').subscribe((scheduleResponse: any) => {
      this.schedulePeriod = {
        start_date: scheduleResponse.start_date,
        end_date: scheduleResponse.end_date,
      };
      this.schedules = scheduleResponse.data;
      this.dataTable = new MatTableDataSource(this.schedules);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    this.dataTable.filter = filterValue.trim().toLowerCase();
    // console.log(this.dataTable.filter);
  }

  ngOnChanges(changes:SimpleChanges) {
    this.dataTable = new MatTableDataSource(this.schedules);
  }

}
