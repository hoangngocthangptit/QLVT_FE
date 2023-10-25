import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

import { Router } from '@angular/router';
import { UsersService } from 'app/Service/users.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
// import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public error = null;
  message = null;
  public isloading = false;
  reCAPTCHAToken: string = "";  
  tokenVisible: boolean = false;;
  submitted = false;
  token: string|undefined;
  protected aFormGroup: FormGroup;
  public form = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    mobileNumber: null,
    role: null,
    recaptcha:null,
    token:undefined
  };
  constructor(private user: UsersService,
              private route: Router,
              private formBuilder: FormBuilder,
            
              // private toastr: ToastrService,
  ) {
    this.token = undefined;
  }
  ngOnInit() {
 
  }
  handleError(error) {
    // this.isloading = false;
    this.error = error.error.message;
    // console.log(error);
    // this.toastr.error(this.error)
    
    Swal.fire({
      icon: "error",
      title: "đăng kí không thành công",
  });
    
    this.route.navigateByUrl('/#/login');
  }

  onSubmit() {
    // console.debug(`Token [${this.token}] generated`);
    this.isloading = true;
    this.user.signUp(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.message = data.message;
    this.isloading = false;
    Swal.fire({
      icon: "success",
      title: "đăng kí thành công",
  });
    console.log(data);
    this.route.navigateByUrl('/#/login');
    // this.toastr.success('Sucessfull Registration Done ');

  }
}
