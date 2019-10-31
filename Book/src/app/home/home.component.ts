import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../services/homeservices.service';
import { PageEvent } from '@angular/material/paginator';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  allBooks: Array<any>;
  bookData: any;
  book_title: any;
  // store:Array<any>;
  // x:number;
  // d:number;


  constructor(private homeservice: HomeservicesService,private router:RouterService,private loginservice:AuthenticationService) {
  //  this.allBooks = [];
  // this.store=[];
  // this.x=0;
  // this.d=0;
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getBook() {
    if(this.book_title==null){
      this.homeservice.fetchBook('twilight').subscribe(data =>{
        this.bookData = data;
        console.log(this.bookData);
          });
    }else{
    this.homeservice.fetchBook(this.book_title).subscribe(data => {
      this.bookData = data;
      console.log(this.bookData);
    });
  }}
getBookByA() {
  if(this.book_title==null){
    this.homeservice.fetchBook('twilight').subscribe(data =>{
      this.bookData = data;
      console.log(this.bookData);
        });
  }else{
    this.homeservice.fetchBookByA(this.book_title).subscribe(data => {
      this.bookData = data;
      console.log(this.bookData);
    });
  }
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
  logout(){
    window.localStorage.removeItem('bearerToken');
    window.localStorage.removeItem('userId');
    this.router.routeToLogin();
  } 
}

