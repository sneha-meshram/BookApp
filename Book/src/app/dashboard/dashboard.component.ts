import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../services/homeservices.service';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  bookData: any;

  constructor(private homeservice: HomeservicesService ,private router:RouterService,private loginservice:AuthenticationService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.homeservice.fetchBook('sherlock').subscribe(data =>{
      this.bookData = data;
      console.log(this.bookData);
        });
  } 
  addtorecommend(mynote) {
    if(this.loginservice.loggedIn()){
    const user1:any ={
      title: mynote.title,
      userId:this.loginservice.getUserId(),
      isbn: mynote.cover_edition_key,
      author_name: mynote.author_name[0]
      
    }
    this.homeservice.addrecommendation(user1).subscribe(res => {
      console.log(res);
      alert(res);
      //this.router.routeToRecommend();
    },
    error => {
      if (error.status == 201)
        console.log();
      else
        alert("Book already present in Recommend List");
    });
}
else {
  alert('Please login')
  this.router.routeToLogin();
}
  
    
  }

  
  addtofavourite(mynote) {

    if(this.loginservice.loggedIn()){
    const user:any ={
      title: mynote.title,
      userId:this.loginservice.getUserId(),
      isbn: mynote.cover_edition_key,
      author_name: mynote.author_name[0]
      
    }
  
    this.homeservice.addfavourite(user).subscribe(res => {
      console.log(res);
      //this.router.routeToFavourite();
      alert(res);
    },
    error => {
      if (error.status == 201)
        console.log();
      else
        alert("Book already present in Favourite List");
    });
}
else {
  alert('Please login')
  this.router.routeToLogin();
}
  }
}
