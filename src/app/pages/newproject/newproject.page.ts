import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import {  MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.page.html',
  styleUrls: ['./newproject.page.scss'],
})
export class NewprojectPage implements OnInit {

  _project: Project;
  user_id: number;

  constructor(
    private navCtrl: NavController,
    private projectService: ProjectService,
    private alertService: AlertService,
    private menuCtrl: MenuController,
    private route: ActivatedRoute
  ) {
    this._project = new Project();
    
    this.user_id = Number(localStorage.getItem("userId"));
  }

  
ionViewWillEnter() {
  this.menuCtrl.enable(false);
 }

  ngOnInit() {
    this.ionViewWillEnter();
  
  }
  
  logOut(){
    this.alertService.showLogOutAlert();
  }  
  createProject() {
    this._project.userId = this.user_id
    this.projectService.createProject(this._project).subscribe((response) => {
      this.alertService.presentToast("Project created..");
      this.projectService.createdP();
      this.navCtrl.navigateRoot('/home');

    })
  }

  cancel(){
    this.navCtrl.navigateRoot('/home');
  }


  
}



