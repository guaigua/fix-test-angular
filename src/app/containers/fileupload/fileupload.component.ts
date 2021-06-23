import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { ProfilesComponent } from '../profiles/profiles.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss',],

})
export class FileuploadComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  @ViewChild(ProfilesComponent) public profile:ProfilesComponent;


  
  public fileForm: FormGroup;

  urls = [];
  flag: any;

  public files: NgxFileDropEntry[] = [];
  public schedules: any = [];

  public schedulePeriod = null;
  dataTable: any;
  imageUrl;

 
   
 

  // public fileForm: FormGroup;

  public constructor( private http: HttpClient,
    private elRef: ElementRef,) {
    
    this.fileForm = new FormBuilder().group({
      location: [null, Validators.compose([Validators.required])],
      caption: [null, Validators.compose([Validators.required])], 
      channel:  null,
      image: null,
      date: [new Date(), Validators.compose([Validators.required])],
      type: null,
    });
   }

  ngOnInit(): void {
    this.http.get('api/schedules').subscribe((scheduleResponse: any) => {
      this.schedulePeriod = {
        start_date: scheduleResponse.start_date,
        end_date: scheduleResponse.end_date,
      };
      this.schedules = scheduleResponse.data;
      this.dataTable = new MatTableDataSource(this.schedules);
    });    
  }
  
 
  // 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.fileForm.patchValue({ image: file });
          if(droppedFile.relativePath.match(/.(jpg|jpeg|png|gif)$/i)){
            var reader = new FileReader();
            reader.addEventListener('load', () => {
              this.imageUrl = reader.result;
            }, false)
            reader.readAsDataURL(file)           
            const getDropcozneClass = this.elRef.nativeElement.querySelector('.satFat-dropZoneBody');
            getDropcozneClass.classList.remove('imgBorderYes')
            getDropcozneClass.classList.add('imgBorderNone')
          }else{
            return
          }

        });
        
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  fileRemove(){
    this.imageUrl=''
		this.files.splice(0, 1);
    // ad class
    const getDropcozneClass = this.elRef.nativeElement.querySelector('.satFat-dropZoneBody');
    getDropcozneClass.classList.remove('imgBorderNone')
    getDropcozneClass.classList.add('imgBorderYes')
  }

  public schedule() {    
    // console.log('channel',this.channel);
    this.fileForm.patchValue({ type: 'feed' });
    this.fileForm.patchValue({ channel: {
      id: 533269,
      user: {     
        username: 'frodobolseirope',
        profile_pic_url:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      }
     } });


    // console.log( 'fileForm', this.fileForm.value)
    if (!this.fileForm.valid) return; // TODO: give feedback
    this.http
      .post('api/schedules', this.fileForm.value, { responseType: 'json' })
      .subscribe((data) => {
        this.fileForm.reset();
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



  public resetTheForm(){
    setTimeout(() => 
      this.formGroupDirective.resetForm(), 0)
  }

}
