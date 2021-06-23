import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleAPIService } from 'src/app/shared/services/schedule-api.service';
import { TableScheduleComponent } from './table-schedule.component';

describe('TableScheduleComponent', () => {
  let component: TableScheduleComponent;
  let fixture: ComponentFixture<TableScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TableScheduleComponent ],   
      providers: [ScheduleAPIService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: TableScheduleComponent = TestBed.get(ScheduleAPIService);
    expect(component).toBeTruthy();
  });
});
