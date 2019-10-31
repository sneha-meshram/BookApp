import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { passvalidator } from '../profilevalidators';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';
import { AuthService } from '../services/auth.service';
import { AbstractWebDriver } from 'protractor/built/browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  url = '';
  signupForm: FormGroup;
submitted = false;
abc=[]
constructor(private formBuilder: FormBuilder,private router:RouterService,private profileservice:AuthenticationService,private auth:AuthService) { }
ngOnInit() {
  this.signupForm = this.formBuilder.group({  
    fullname:['', [Validators.required]],
    email:['', [Validators.required]],

    password: ['', [Validators.required, Validators.minLength(6)]],
    newpassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, passvalidator]],
  }
  );
  let emailId=window.localStorage.getItem('userId');
this.auth.editProfile(emailId).subscribe(data=>{
  console.log(data);
  this.abc.push(data);
  console.log(this.abc[0].fullname);
})
}
// convenience getter for easy access to form fields
get f() { return this.signupForm.controls; }
updateUser() {
  
  this.submitted = true;
  console.log(this.signupForm.value);
  if (this.signupForm.valid) {
    console.log('error');
  }
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
  else {
    let emailId=window.localStorage.getItem('userId');
  const login:any={email:emailId,password:this.signupForm.value.password};
console.log("login")
console.log(login)

this.profileservice.authenticateLogin(login).subscribe(data=> {
  // alert("success")
this.auth.updateregister(login).subscribe(data=>{
  
  window.location.reload();
})
})
}
}

 
 onSelectFile(event : any) {
   if (event.target.files && event.target.files[0]) {
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]); // read file as data url
     reader.onload = (event : any) => { // called once readAsDataURL is completed
   this.url = event.target.result;
     }
   }
  }
  logout(){
    window.localStorage.removeItem('bearerToken');
    window.localStorage.removeItem('userId');
    this.router.routeToLogin();
  } 
}