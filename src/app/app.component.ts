import { Component, OnInit } from '@angular/core';

import { Platform, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DeviceService} from './services/device.service';
import { Device} from './models/device';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from './services/data.service';
import { ProjectdetailPage } from './pages/projectdetail/projectdetail.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DeviceService, ProjectdetailPage, NavParams]
})
export class AppComponent implements OnInit {
  devices : Device[];
  var_id: any[];
  prj_id : any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private deviceService: DeviceService,
    private router: Router,
    private dataService: DataService,
    private prjDetailPage: ProjectdetailPage 
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
      console.log(this.devices)
    })
  }

  public selectedVariable(var_id){
    this.dataService.setVar(var_id);
    
    let current_url = this.router.url 
    if(current_url.length < 18){
      let url = current_url + '/' +var_id;
      this.router.navigateByUrl(url);
    }
    else{
      let url = current_url + '&' +var_id;
      this.router.navigateByUrl(url);
    }

    /*
    
    this.prj_id = Number(localStorage.getItem("projectId"));
    let current_url = this.router.url 
    if(this.prj_id){
      let url = current_url + '/' +var_id;
      this.router.navigateByUrl(url);
    }
    else{
      let url = current_url + '&' +var_id;
      this.router.navigateByUrl(url);
    }
*/
    
  }
}



