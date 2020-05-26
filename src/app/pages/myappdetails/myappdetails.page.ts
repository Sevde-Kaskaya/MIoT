import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { Router, ActivatedRoute } from '@angular/router';
import { Myapp } from 'src/app/models/myapp';
import { MyappService } from 'src/app/services/myapp.service';

@Component({
  selector: 'app-myappdetails',
  templateUrl: './myappdetails.page.html',
  styleUrls: ['./myappdetails.page.scss'],
})
export class MyappdetailsPage implements OnInit {

  app_id: number;
  app: any[];
  _MyApp: Myapp;
  projects: Project[];
  user_id: Number;
  gelen_app: any;
  app_name: string;

  constructor(private navCtrl: NavController,
    private projectService: ProjectService,
    private appService: MyappService,
    private router: Router,
    private route: ActivatedRoute,
    private myAppService: MyappService) {

    this.user_id = Number(localStorage.getItem("userId"));
    
    /*this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this._MyApp = JSON.parse(params.special);
      }
    });*/
    this._MyApp = new Myapp();
    this.appGetir();
   
  }

  sliderConfig = {

  }

  ngOnInit() {
    this.getProjects();
   
  }

  getProjects() {
    this.projectService.getProject(this.user_id).subscribe((data) => {
      this.projects = data;
    })
  }

  appGetir() {
    this.app_id = this.route.snapshot.data['app'];
    console.log("app_id:" + this.app_id)
    
    this.gelen_app = this.app_id
    this.myAppService.getApp(this.gelen_app).subscribe(data => {
      this._MyApp = data;
      this.app_name = this._MyApp.name
      console.log(data)
    })
  }

  cancel() {
    this.navCtrl.navigateForward('/myapp');
  }
}
