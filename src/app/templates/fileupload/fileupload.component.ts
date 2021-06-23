import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss',],

})
export class FileuploadComponent implements OnInit {

  urls = [];
  flag: any;

  public files: NgxFileDropEntry[] = [];
  imageUrl;

  private form: FormGroup;

  public constructor( private elRef: ElementRef,) {
    
    this.form = new FormBuilder().group({
      channel: null,
      image: null,
      date: [new Date()],
      type: null,
    });
   }

  ngOnInit(): void {
  }

  // 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.form.patchValue({ image: file });
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


}
