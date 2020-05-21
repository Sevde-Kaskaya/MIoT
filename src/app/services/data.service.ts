import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private user_id: any;
  private prj_id : any;
  private var_id : any[];
 
  constructor() { }
 
  setUser(user_id) {
    this.user_id = user_id;
  }
 
  getUser(user_id) {
    return this.user_id;
  }


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
