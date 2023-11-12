import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

import { UsersService } from 'app/Service/users.service';
import { TokenService } from 'app/Service/token.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public error = null;
  public hide = true;
  public valideUser = false;
  public tokenValue = null;
  public isLoading = false;
  public form = {
    email: null,
    password: null,
    role: null
  };

  constructor(private user: UsersService,
              private token: TokenService,
              private route: Router,
              private titleService: Title
    ) {
      this.setTitle('login | Login');
  }
  handleError(error: { error: any; }) {
    this.isLoading = false;
    this.error = error.error.message;
    if ( error.error.status === 0) {
      console.log('please connect database');
    }

    console.log(error);
  }
  ngOnInit() {
  }
  onSubmit() {
    this.isLoading = true;
    this.user.signIn(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
  }

  handleResponse(data) {
    this.token.handle(data);
    console.log(data);
    this.isLoading = false;
    this.token.logedIn(true);
    console.log('user is --->' + data);
    // if (this.form.role === 'admin') {
    //   this.route.navigateByUrl('chart');
    //   return;
    // }
    // if (this.form.role === 'seller') {
    //   localStorage.setItem('role', 'seller');
    //   this.route.navigateByUrl('books');
    //   return;
    // }
    // if (this.form.role === 'user') {
      // localStorage.setItem('role', 'user');
      debugger
     if (data.obj.role === 'admin') {
      this.route.navigateByUrl('chi-nhanh');
     }
     else{
      this.route.navigateByUrl('dashboard');
     }
      return;
    // }
}

  public setTitle( dashboard: string) {
    this.titleService.setTitle( dashboard );
    }
}