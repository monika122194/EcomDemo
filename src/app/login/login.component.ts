import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') signInForm: NgForm;
  private subscription: Subscription;
  public responceMessage: string = null;
  public statusCode: any = null;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.loginDataSubmit(this.signInForm.value.email, this.signInForm.value.password);
    this.subscription = this.loginService.loginResponceChange.subscribe(
        (responce: any) => {
          this.statusCode = responce.status_code;
          this.responceMessage = responce.message;
          if (responce.status_code == 200) {
              // this.loginService.setAuthUser(responce.data);
              this.router.navigate(['/home']);
          }
        }
    );
  }
}
