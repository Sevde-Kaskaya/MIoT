import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NavController, MenuController } from '@ionic/angular';
import { Myapp } from '../../models/myapp';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { MyappService } from 'src/app/services/myapp.service';
@Component({
  selector: 'app-createapp',
  templateUrl: './createapp.page.html',
  styleUrls: ['./createapp.page.scss'],
})
export class CreateappPage implements OnInit {

  constructor(
    private alertService: AlertService,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private projectService: ProjectService,
    private myappService: MyappService) {
    this._myApp = new Myapp();
    this.user_id = Number(localStorage.getItem("userId"));

  }

  ngOnInit() {
    this.projeleriGetir();
  }

  selectedProjects: Array<Project> = new Array<Project>();
  select_eventOption(detail: boolean, index: number) {
    if (detail) {
      this.selectedProjects.push(this.projects[index]);
    } else {
      const ind = this.selectedProjects.findIndex((i: Project) => {
        return (i.id === this.projects[index].id);
      });
      if (-1 != ind) {
        this.selectedProjects.splice(ind, 1);
      }
    }
  }
  _myApp: Myapp;
  projects: Project[]
  user_id: number
  projeleriGetir() {
    this.projectService.getProject(this.user_id).subscribe((data) => {
      this.projects = data;
    })
  }

appID: number = 0;
  createApp() {
    if(this.selectedProjects.length ==0)
      return;
    if(this._myApp.name == undefined)
      return;
    
    this._myApp.user_id=this.user_id;

    this.myappService.createApp(this._myApp).subscribe((response) => {
      console.log(response);
     /* this.appID = response.id;
      if(this.appID!=0){
        console.log("appid"+this.appID)
        for(let i=0;i<this.selectedProjects.length;i++){
          this.appProject.app_id=this.appID;
          this.appProject.project_id=this.selectedProjects[i].id;
          this.myappService.createAppProjects(this.appProject);
        }
      }
      console.log("app olusturuldu")
      this.alertService.presentToast("App Olusturuldu..");*/
    })
    

      console.log(this.selectedProjects);
  }


  cancel() {
    this.navCtrl.navigateForward('/myapp');
  }
}