import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.page.html',
  styleUrls: ['./newproject.page.scss'],
})
export class NewprojectPage implements OnInit {

  _project: Project;

  constructor(
    private navCtrl: NavController,
    private projectService: ProjectService,
    private alertService: AlertService
  ) {
    this._project = new Project();
  }

  ngOnInit() {
  
  }
  
  logOut(){
    this.alertService.showLogOutAlert();
  }  
  createProject() {
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



