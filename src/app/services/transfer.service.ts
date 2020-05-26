import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private prj_id : any;
  private device_id : any[];
 
  constructor() { }

  setPrj(prj_id) {
    this.prj_id = prj_id;
  }
 
  getPrj(prj_id) {
    return this.prj_id;
  }

  setVar(device_id) {
    this.device_id = device_id;
  }
 
  getVar(device_id) {
    return this.device_id;
  }
}
