import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [NavParams]
})
export class HomePage implements OnInit {

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
    private dataService: DataService) {
  }

  ngOnInit() {
    this.projeleriGetir();
    this.ionViewWillEnter();
    this.userIdGetir();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  logOut() {
    this.alertService.showLogOutAlert();
  }

  projeleriGetir() {
    this.projectService.getProject1().subscribe((data) => {
      this.projects = data;
      //console.log(this.projects);
    })
  }

  userIdGetir(){
    if (this.route.snapshot.data['user']) {
      this.data = this.route.snapshot.data['user'];
      console.log("home sayfasına gelen user_id:"+this.data)
    }
    else{
      console.log("home sayfasına user gelmiyor")
    }
  }

  goProject(prj_id) {
    this.dataService.setData(prj_id);
    let url = '/projectdetail/'+prj_id
    this.router.navigateByUrl(url);

   /*--------------------SERVIS KULLANMADAN VERI TASIMA--------------------

   console.log("home sayfasındayız: " + prj_id)
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(prj_id)
      }
    };
    this.router.navigate(['/projectdetail'], navigationExtras);

    ------------------SERVIS KULLANMADAN VERI TASIMA---------------------*/
  }
}




