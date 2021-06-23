import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleAPIService } from 'src/app/shared/services/schedule-api.service';
import { ProfilesComponent } from './profiles.component';

describe('ProfilesComponent', () => {
  let component: ProfilesComponent;
  let fixture: ComponentFixture<ProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProfilesComponent ],
      providers: [ScheduleAPIService]      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: ProfilesComponent  = TestBed.get(ScheduleAPIService);
    expect(component).toBeTruthy();
  });
});
