import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot  } from '@angular/router';
import { DataService } from './../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService  implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let prj_id = route.paramMap.get('prj_id');
    //let user_id = route.paramMap.get('user_id');
    //return this.dataService.getUser(user_id);
    
    return this.dataService.getPrj(prj_id);

  
  }
}
