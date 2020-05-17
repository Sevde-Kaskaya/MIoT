import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private id : any;
 
  constructor() { }
 
  setData(id) {
    this.id = id;
  }
 
  getData(id) {
    return this.id;
  }
}
