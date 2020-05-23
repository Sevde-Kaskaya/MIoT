import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private prj_id : any;
  private var_id : any[];
 
  constructor() { }

  setPrj(prj_id) {
    this.prj_id = prj_id;
  }
 
  getPrj(prj_id) {
    return this.prj_id;
  }

  setVar(var_id) {
    this.var_id = var_id;
  }
 
  getVar(var_id) {
    return this.var_id;
  }
}
