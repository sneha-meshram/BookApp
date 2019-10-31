// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// //import { SignupUser } from '../signup';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent implements OnInit {

//  //registerUserData={}
// //   signupForm : FormGroup;
// //   errMessage: string;
// //   newUser: SignupUser = new SignupUser();
// //   Users: Array<SignupUser> = [];
// //   FullName: any;
// //   password: any;
// //   email: any;

// //   constructor(private auth: AuthService) { 
// //    // console.log("hi");
// //   }

// //   ngOnInit() {
// //     //console.log("hello");
// //     this.signupForm = new FormGroup({
// //       fullname : new FormControl('', [Validators.required]),
// //       email : new FormControl('', [Validators.required]),
// //        password : new FormControl('', [Validators.required,Validators.minLength(6)])
// //      });
// //     // console.log("hey");
// //      this.auth.getUser().subscribe(response => {
// //        console.log(response);
// //        this.Users = response;
// //      });
// //      //console.log("heya");
// //   }

// //   registerUser() {
// //     console.log(this.newUser);
// //     //  this.auth.registerUser(this.registerUserData).subscribe(
// //     //   res=>console.log(res);
// //    // console.log("hola");
// //    //const newUser: any = { fullname:this.FullName,email: this.email, password: this.password };
// //     if(this.newUser.fullname === '' || this.newUser.email === '' || this.newUser.password === '') {
// //       this.errMessage = 'All are required fields.';
// //     } else {
// //       //console.log(this.newUser.FullName);
// //        //this.newUser.FullName= this.FullName.value;
// //     // this.newUser.Password=this.password.value;
// //      //this.newUser.Email=this.email.value;
// //      this.Users.push(this.newUser);
// //      //console.log(this.Users);
// //       this.auth.addUser(this.newUser).subscribe(response => {
// //         console.log(response);
// //         // this.Users.push(response);
// //       });
       
// //       this.Users.push(this.newUser);
// //       this.newUser = new SignupUser(); 
// //     }
// //   }

  



// signupForm : FormGroup;
//  //errMessage: string;
//  submitted = false;
//  newUser:any;
// //  Users: Array<SignupUser> = [];
// Users: Array<any> = [];
 
//  constructor(private auth: AuthService,private formBuilder: FormBuilder) {

//   }
//  ngOnInit() {
//    console.log("hello");
//    this.signupForm = this.formBuilder.group({
//      fullname : ['', [Validators.required]],
//      email :['', [Validators.required, Validators.email]],
//       password :['', [Validators.required,Validators.minLength(6)]],
//       profile:['',Validators.required]
//     });
//    // console.log("hey");
//     this.auth.getUser().subscribe(response => {
//       console.log(response);
//       this.Users = response;
//     });
//     this.Users.push(this.newUser);

//     //console.log("heya");
//  }
//  get f() { return this.signupForm.controls; }
//  registerUser() {
//    this.submitted = true;
//   if (this.signupForm.invalid) {
//    return;
//  }
//    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
//    console.log(this.signupForm.value);
//   // this.newUser.image = this.url;
//      this.auth.addUser(this.signupForm.value).subscribe((response:any )=> {
//        console.log(response);
//        this.Users.push(response);
//      });
//      //      //console.log(this.Users);
// //       this.auth.addUser(this.newUser).subscribe(response => {
// //         console.log(response);
// //         // this.Users.push(response);
// //       });
//      this.Users.push(this.newUser);
//      //this.newUser = new SignupUser();
//    }
//    onReset() {
//      this.submitted = false;
//      this.signupForm.reset();
//    }
// url = '';
//  onSelectFile(event : any) {
//    if (event.target.files && event.target.files[0]) {
//      var reader = new FileReader();
//      reader.readAsDataURL(event.target.files[0]); // read file as data url
//      reader.onload = (event : any) => { // called once readAsDataURL is completed
//    this.signupForm.value.profile = event.target.result;
//    console.log(this.url);
//      }
//    }
//  }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignupUser } from '../signup';
import { RouterModule } from '@angular/router';
import { RouterService } from '../services/router.service';
@Component({
 selector: 'app-sign-up',
 templateUrl: './sign-up.component.html',
 styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 //[x: string]: any;
//registerUserData={}
 signupForm : FormGroup;
 //errMessage: string;
 submitted = false;
 newUser:any;
 //newUser: SignupUser = new SignupUser();
 Users: Array<any> = [];
 register:any;
 // email: any;
 // password: any;
 constructor(private auth: AuthService,private formBuilder: FormBuilder,private router:RouterService) {
//    // console.log("hi");
this.signupForm = this.formBuilder.group({
  fullname : ['', [Validators.required]],
  email :['', [Validators.required, Validators.email]],
   password :['', [Validators.required,Validators.minLength(6)]]
 });
  }
 ngOnInit() {
   console.log("hello");
   this.signupForm = this.formBuilder.group({
    fullname : ['', [Validators.required]],
    email :['', [Validators.required, Validators.email]],
     password :['', [Validators.required,Validators.minLength(6)]]
   });
  //  // console.log("hey");
  //   this.auth.getUser().subscribe(response => {
  //     console.log(response);
  //     this.Users = response;
  //   });
  //   //console.log("heya");
 }
 url = '';
 onSelectFile(event : any) {
   if (event.target.files && event.target.files[0]) {
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]); // read file as data url
     reader.onload = (event : any) => { // called once readAsDataURL is completed
   this.url = event.target.result;
     }
   }
 }
 get f() { return this.signupForm.controls; }
 registerUser() {
   this.submitted = true;
  if (this.signupForm.invalid) {
   return;
 }
   //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
   console.log(this.signupForm.value,this.url);
   //this.newUser.image = this.url;
    this.register =this.signupForm.value;
    this.register.image = this.url;
    
    this.auth.addUser(this.register).subscribe((response:any )=> {
      console.log(response);
      this.Users.push(response);
     this.router.routeToLogin();
         }
         
         );

         this.Users.push(this.newUser);
     
   //  this.signupForm.reset();
   }

   
     
   
}