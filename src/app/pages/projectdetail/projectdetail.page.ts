import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NavController, MenuController, NavParams, IonNav } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import { DetailService } from 'src/app/services/detail.service';

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
  user_id: number;

  constructor(
    private alertService: AlertService,
    private navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private detailService: DetailService) {

    this.user_id = Number(localStorage.getItem("userId"));

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
    this.prjIdGetir();
    this.varIdGetir();

  }

  prjIdGetir() {
    this.projectData = this.route.snapshot.data['project'];
    console.log("detay sayfaya gelen prj_id:" + this.projectData)
    localStorage.setItem("projectId", String(this.projectData)) //login yapan user tutuluyor
    return this.projectData;
  }

  varIdGetir() {
    this.data = this.route.snapshot.data['variable'];
    console.log("detay sayfaya gelen var_id:" + this.data)
    return this.data;

  }

  logOut() {
    this.alertService.showLogOutAlert();
  }

  cancel() {
    this.navCtrl.navigateForward('/home');
  }


}
