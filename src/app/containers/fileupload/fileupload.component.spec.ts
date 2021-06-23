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
});
