import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RegisterService} from "./register.service";
import {ResponceModel} from "../shared/responceModel";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') signUpForm: NgForm;
  public status_code: any;
  public message: string;

  constructor(public registerService: RegisterService,
              private loginService: LoginService,
              private router: Router
  ) {}
  ngOnInit() {
  }

  onSubmit() {
    this.registerService.registerDataSubmit(this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.name, this.signUpForm.value.phone_no);
    this.registerService.registerResponceChanged.subscribe(
      (responce: any) => {
        this.status_code = responce.status_code;
        this.message = responce.message;

        if (responce.status_code == 200) {
          this.loginService.loginDataSubmit(this.signUpForm.value.email, this.signUpForm.value.password);
        }

        this.loginService.loginResponceChange.subscribe(
          (responce: any) => {
            this.status_code = responce.status_code;
            this.message = responce.message;
            console.log('login responce');
            if (responce.status_code == 200) {
              // this.loginService.setAuthUser(responce.data);
              this.router.navigate(['/home']);
            }
          }
        );
      }
    );
  }
}
