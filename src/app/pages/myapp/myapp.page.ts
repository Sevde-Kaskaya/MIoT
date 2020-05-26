import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { MyappService } from 'src/app/services/myapp.service';
import { Myapp } from '../../models/myapp';
import { NavigationExtras, Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';
@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.page.html',
  styleUrls: ['./myapp.page.scss'],
})
export class MyappPage implements OnInit {

  constructor(private alertService: AlertService,
    private navCtrl: NavController,
    private MyappService: MyappService,
    private router: Router,
    private transferService: TransferService) {
    this.user_id = Number(localStorage.getItem("userId"));
  }

  user_id: Number
  ngOnInit() {
    console.log("oninit" + this.user_id);
    this.appLoad();
  }

  myApp: Myapp[];
  appLoad() {
    //console.log(this.user_id)
    this.MyappService.getApps(this.user_id).subscribe((data) => {
      console.log(data);
      this.myApp = data;
    })
    console.log(this.myApp);
  }



  goAppDetail(app_id) {
    this.transferService.setPrj(app_id);
    let url = '/myappdetails/' + app_id
    this.router.navigateByUrl(url);
    
    /*let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(app_id)
      }
    };
    this.router.navigate(['/myappdetails'], navigationExtras);*/
   
  }


  logOut() {
    console.log("MyAppLogOut")
    this.alertService.showLogOutAlert();
  }

  cancel() {
    this.navCtrl.navigateForward('/home');
  }

  createApp() {
    this.navCtrl.navigateForward('/createapp');
  }
}