import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot  } from '@angular/router';
import { TransferService } from '../services/transfer.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolverService  implements Resolve<any> {

  constructor(private transferService: TransferService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let prj_id = route.paramMap.get('prj_id');
    return this.transferService.getPrj(prj_id);
  }
}
