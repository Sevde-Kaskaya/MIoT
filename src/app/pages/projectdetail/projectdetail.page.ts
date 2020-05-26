import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NavController, MenuController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
  providers: [NavParams]
})
export class ProjectdetailPage implements OnInit {

  user_id: number;
  gelen_project: any[];
  gelen_device: any[];

  devices: Device[];
  datas: Data[];

  device_name: string;
  device_id: any;

  constructor(
    private alertService: AlertService,
    private navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private dataService: DataService) {

    this.user_id = Number(localStorage.getItem("userId"));
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.projectGetir();
    this.deviceGetir();
  }

  projectGetir() {
    this.gelen_project = this.route.snapshot.data['project'];
    console.log("detay sayfaya gelen prj_id:" + this.gelen_project)
    localStorage.setItem("projectId", String(this.gelen_project))
    return this.gelen_project;
  }

  tip: number;

  deviceGetir() {
    this.device_id = this.route.snapshot.data['variable'];
    console.log("detay sayfaya gelen device id:" + this.device_id)
    
    this.gelen_device = this.device_id
    this.deviceService.getDevice(this.gelen_device).subscribe(data => {
      this.devices = data;
      if (this.devices.length == 0) {
        this.alertService.presentToast("device seçilmedi");
      } else {
        this.device_name = this.devices[0].name;
        console.log("device name: "+this.device_name)
        this.dataService.getDeviceData(this.devices[0].id).subscribe((data) => {
          if(this.devices[0].type_id == String(1)){
            this.datas = data;
            let tip = 1
            console.log("tip 1")
          }else{
            let tip = 0
            console.log("tip 0")
          }
         
        })
      }
    })
}

  logOut() {
    this.alertService.showLogOutAlert();
  }

  cancel() {
    this.navCtrl.navigateForward('/home');
  }


}
