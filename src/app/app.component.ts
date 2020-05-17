import { Component, OnInit } from '@angular/core';

import { Platform, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DeviceService} from './services/device.service';
import { Device} from './models/device';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DeviceService]
})
export class AppComponent implements OnInit {
  devices : Device[];
  var_id: number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private deviceService: DeviceService,
    private router: Router,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
   this.getDevice();
   
  }

  getDevice(){
    this.deviceService.getDevice().subscribe(data => {
      this.devices = data
    })
  }
  public selectedVariable(var_id){
    this.dataService.setData(var_id);
    let url = '/projectdetail/'+var_id
    this.router.navigateByUrl(url);

  }
}



