import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TransferService } from '../services/transfer.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceResolverService  implements Resolve<any> {

  device_id: any[];

  constructor(private transferService: TransferService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let device_id = route.paramMap.get('device_id');
    return this.transferService.getVar(device_id);
  }
}
