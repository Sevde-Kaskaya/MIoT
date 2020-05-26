import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [NavParams]
})
export class HomePage implements OnInit {

  user_id: number;
  prj_id: number;
  title = "Projects"
  projects: Project[];
  data: any;

  constructor(public loadingCntrl: LoadingController,
    private alertService: AlertService,
    private projectService: ProjectService,
    private menuCtrl: MenuController,
    private router: Router,
    private route: ActivatedRoute,
    private transferService: TransferService) {

    this.route.queryParams.subscribe(params => {
      if (params && params.userid) {
        this.user_id = JSON.parse(params.userid);
        localStorage.setItem("userId", String(this.user_id)) //login yapan user tutuluyor
      }
    });

    this.user_id = Number(localStorage.getItem("userId"));
  }
    /* 
      prj: string;
      deneme: string;
      dizi: string[];
      
    this.prj = "1,2,3,4"
 
     console.log(this.prj)
 
     this.dizi = this.prj.split(',');
 
     console.log("dizi: "+ this.dizi[2])
 
     this.deneme = ""
     for(let i =0; i< this.dizi.length; i++){
       this.deneme += this.dizi[i] + ","
       
     }
 
     this.deneme = this.deneme.substring(0,this.deneme.length-1)
     console.log("deneme: "+this.deneme)
 
     */
  

  ngOnInit() {
    this.projeleriGetir();
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  logOut() {
    this.alertService.showLogOutAlert();
  }

  projeleriGetir() {
    this.projectService.getProject(this.user_id).subscribe((data) => {
      this.projects = data;
    })
  }

  createProject() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        userid: JSON.stringify(this.user_id)
      }
    };
    this.router.navigate(['/newproject'], navigationExtras);
  }

  goProject(prj_id) {
    this.transferService.setPrj(prj_id);
    let url = '/projectdetail/' + prj_id
    this.router.navigateByUrl(url);
  }

  
}




