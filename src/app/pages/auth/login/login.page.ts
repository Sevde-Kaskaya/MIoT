import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { User } from './../../../models/user'
import { AccountService } from 'src/app/services/account.service';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  _user: User;
  check_user: User[]
  user_id: number;

  constructor(
    private accountService: AccountService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private router: Router
  ) {
    this._user = new User();
  }

  ngOnInit() { }

  Login(_user) {
    this.accountService.getUser(this._user).subscribe(data => {
      this.check_user = data;
      if (this.check_user.length == 0) {
        this.alertService.presentToast("Kullanıcı bulunamadi");
      } else {
        this.accountService.logIn();
        this.user_id = this.check_user[0].id
        let url = '/home/' + this.user_id
        let navigationExtras: NavigationExtras = {
          queryParams: {
            userid: JSON.stringify(this.user_id)
          }
        };
        this.router.navigate(['/home'], navigationExtras);
      }
    })
  }

  cancel() {
    this.navCtrl.navigateRoot('/app');
  }
}
