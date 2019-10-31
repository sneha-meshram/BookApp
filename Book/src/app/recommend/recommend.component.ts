import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../services/homeservices.service';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  constructor(private data:HomeservicesService,private loginservice:AuthenticationService,private router:RouterService) { }
data1:any;
  ngOnInit() {
    let userId=this.loginservice.getUserId();
    this.data
    .getrecommend(userId)
    .subscribe(data =>{
      this.data1=data;
    });
    // if(Object.keys(this.data1).length==0){
    //   alert("No Recommends added");
    // }
  }
delete(mynote){
  let userId=this.loginservice.getUserId();
  this.data.removerecommendation(mynote).subscribe(res=>{
    // this.data
    // .getrecommend(userId)
    // .subscribe(data =>{
    //   this.data1=data;
    // });
  });
  this.ngOnInit();
    this.ngOnInit();
    
  }
  logout(){
    window.localStorage.removeItem('bearerToken');
    window.localStorage.removeItem('userId');
    this.router.routeToLogin();
  } 
}
