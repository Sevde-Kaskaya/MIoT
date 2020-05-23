import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceResolverService  implements Resolve<any> {

  var_id: any[];

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let var_id = route.paramMap.get('var_id');
    return this.dataService.getVar(var_id);
  }
}
