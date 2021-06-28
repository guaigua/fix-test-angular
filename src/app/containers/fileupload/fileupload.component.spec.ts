import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleAPIService } from 'src/app/shared/services/schedule-api.service';
import { FileuploadComponent } from './fileupload.component';


describe('FileuploadComponent', () => {
  let component: FileuploadComponent;
  let fixture: ComponentFixture<FileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({     
      imports: [HttpClientTestingModule],
      declarations: [ FileuploadComponent ],
      providers: [ScheduleAPIService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: FileuploadComponent  = TestBed.get(ScheduleAPIService);
    expect(component).toBeTruthy();
  });

  it(`shoul dhave as text 'Form File'`, () => {
    expect(component.title).toEqual('Form File');
  });

  // it(`should set submitted shedule to true`,() => {
  //   component.schedule();
  //   expect(component.submitted).toBeTruthy();
  // });

  it(`form should be invalid`, () => {
    component.fileForm.controls['location'].setValue('');
    component.fileForm.controls['caption'].setValue('');
    component.fileForm.controls['channel'].setValue('');
    component.fileForm.controls['image'].setValue('');
    component.fileForm.controls['date'].setValue('');
    component.fileForm.controls['type'].setValue('');
    expect(component.fileForm.valid).toBeFalsy();
  });

  it(`form should be valid`, () => {
    component.fileForm.controls['location'].setValue('Curitiba');
    component.fileForm.controls['caption'].setValue('Curitiba');
    component.fileForm.controls['channel'].setValue('');
    component.fileForm.controls['image'].setValue('');
    component.fileForm.controls['date'].setValue(new Date());
    component.fileForm.controls['type'].setValue('Feed');
    expect(component.fileForm.valid).toBeTruthy();
  });

});
