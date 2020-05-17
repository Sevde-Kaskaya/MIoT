import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NavController, MenuController, NavParams, IonNav } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
  providers: [NavParams]
})
export class ProjectdetailPage implements OnInit {

  data: any;
  variable: Device[];

  constructor(
    private alertService: AlertService,
    private navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private deviceService: DeviceService,
    private route: ActivatedRoute) 
    { 
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
    this.idGetir();
  }

  idGetir(){
    if (this.route.snapshot.data['project']) {
      this.data = this.route.snapshot.data['project'];
      console.log("detay sayfaya gelen prj_id:"+this.data)
      
      if(this.route.snapshot.data['variable']) {
        this.data = this.route.snapshot.data['variable'];
        console.log("detay sayfaya gelen var_id:"+this.data)
      }
    }
    
    else{
      console.log("detay sayfaya veri gelmiyor")
    }
     
  }

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
