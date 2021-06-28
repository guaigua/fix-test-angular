import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  channel: any = {};
  schedules: any = {};
  type: string;
 

  constructor() { }
}
