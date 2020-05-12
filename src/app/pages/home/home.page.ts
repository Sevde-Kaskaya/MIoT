import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public loadingCntrl: LoadingController,
    private navCtrl: NavController,
    private alertService: AlertService,
    private http: HttpClient,
    private projectService: ProjectService) {
  
  }
  title = "Projects"
  projects: Project[];

  ngOnInit() {
    this.projeleriGetir();
  }

  logOut(){
    this.alertService.showLogOutAlert();
  }  

  projeleriGetir() {
    this.projectService.getProject1().subscribe((data) => {
      this.projects = data;
      console.log(this.projects);
    })
  }

  goProject(event, project){
    this.navCtrl.navigateForward('/projectdetail');
    console.log(project.projectName);
  }
}
