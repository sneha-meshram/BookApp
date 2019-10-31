import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public bearerToken: any;
  loginUserData={};

  loginForm:FormGroup;
  invalidLogin: boolean;

  // constructor(private authService : AuthenticationService) { }
constructor(private router: RouterService, private loginservice:AuthenticationService){}
  ngOnInit() {
     this.loginForm = new FormGroup({
     email : new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$')]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)])
    })
    if (this.loginservice.getBearerToken) {
      this.router.routeToDashboard();
    }
   }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  mapping(){
    console.log(this.loginForm.value);
    this.loginservice.authenticateLogin(this.loginForm.value).subscribe(
      data =>{
        console.log(data);
        this.bearerToken = data['token'];
        this.loginservice.setBearerToken(this.bearerToken);
        this.loginservice.setUserId(this.loginForm.value.email);
        this.router.routeToDashboard();  
      } 
    )
    
    
   }
   //this.auth.addUser(this.signupForm.value).subscribe((response:any )=> {
  //  console.log(response);

}