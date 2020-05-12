import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {

  constructor(private alertService: AlertService,private navCtrl: NavController) { }

  ngOnInit() {
  }

  logOut(){
    this.alertService.showLogOutAlert();
  }  

  cancel(){
    this.navCtrl.navigateRoot('/home');
  }


}
