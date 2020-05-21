import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NavController, MenuController, NavParams, IonNav } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import { DetailService } from 'src/app/services/detail.service';
import { Detail } from 'src/app/models/detail';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
  providers: [NavParams]
})
export class ProjectdetailPage implements OnInit {

  projectData: any[];
  data2: string[];
  datas: number[];
  data: any;
  variable: Device[];

  constructor(
    private alertService: AlertService,
    private navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private detailService: DetailService) {
    /*-------------------SERVIS KULLANMADAN VERI TASIMA----------------

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        console.log("detay sayfasındayız: " + this.data)
      }
    });
    ---------------------SERVIS KULLANMADAN VERI TASIMA---------------*/
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.variableListele();
    this.prjIdGetir();
    this.varIdGetir();
    console.log("local storage: "+localStorage.getItem("userId"))

  }

  prjIdGetir() {
      this.projectData = this.route.snapshot.data['project'];
      console.log("detay sayfaya gelen prj_id:" + this.projectData)
      return this.projectData;
    }
    
  varIdGetir() {
    this.data = this.route.snapshot.data['variable'];
    console.log("detay sayfaya gelen var_id:" + this.data)
    return this.data;
  
  
  }

  
    /*
    for(var i= 0; i<10; i++){
      this.data2[i] = this.varIdGetir();
      console.log("data2 "+ i + ":"+ this.data2[i])
    }*/
  


/*
  detailDeviceEkle(){
   /* this.detailService.addDetailDevice(this._detail.devices).subscribe((response) =>{
      this.detailService.createdDetail();*/

  variableListele() {
    this.deviceService.getDevice().subscribe((data) => {
      this.variable = data;
      // console.log(this.variable);
    })
  }
  logOut() {
    this.alertService.showLogOutAlert();
  }

  cancel() {
    this.navCtrl.navigateForward('/home');
  }


}
