import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../services/homeservices.service';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private data:HomeservicesService,private loginservice:AuthenticationService,private router:RouterService) { }
data2:any;
  ngOnInit() {
    let userId=this.loginservice.getUserId();

    this.data
    .getfavourite(userId)
    .subscribe(data =>{
      this.data2=data;
    });
    // if(Object.keys(this.data2).length==0){
    //   alert("No favourites added");
    // }
  }
  delete1(mynote){
    let userId=this.loginservice.getUserId();

    this.data.removefavourite(mynote).subscribe(res=>{
      // this.data
      // .getfavourite(userId)
      // .subscribe(data =>{
      //   this.data2=data;
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
