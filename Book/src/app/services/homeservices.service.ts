 import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 @Injectable({
   providedIn: 'root'
 })
export class HomeservicesService {

//   constructor() { }
// }




  constructor(private http: HttpClient) { }

  fetchAllBook(): Observable<any> {
    return this.http.get(`http://openlibrary.org/search.json?`);
  }



  fetchBook(title: any) {
    return this.http.get(`http://openlibrary.org/search.json?title=${title}`);
  }

  fetchBookByA(title: any) {
    return this.http.get(`http://openlibrary.org/search.json?author=${title}`);
  }
  addrecommendation(mynote){
   // return this.http.post('http://localhost:3000/recommend', mynote);
   return this.http.post('http://localhost:8086/api/recommend/create', mynote);
  }
  getrecommend(userId:string){
  //  return this.http.get('http://localhost:3000/recommend');
    return this.http.get('http://localhost:8086/api/recommend'+"/"+userId);
    
  }
  removerecommendation(mynote){
    
    return this.http.delete('http://localhost:8086/api/recommend'+"/"+mynote.isbn,mynote);
    // return this.http.delete('http://localhost:3000/recommend'+"/"+mynote.id,mynote);
  }
  addfavourite(mynote){
    // return this.http.post('http://localhost:3000/favourite', mynote);
    console.log(mynote);
    return this.http.post('http://localhost:8085/api/favourite/create', mynote);
  }
  removefavourite(mynote){
    return this.http.delete(' http://localhost:8085/api/favourites'+"/"+mynote.isbn,mynote);
    // return this.http.delete(' http://localhost:3000/favourite'+"/"+mynote.id,mynote);
  }
  getfavourite(userId:string){
    //return this.http.get('http://localhost:3000/favourite');
    return this.http.get('http://localhost:8085/api/favourites'+"/"+userId);
  }
  // removerecommendation(val:number): Observable<Array<mynote>> {      
  //   return this.http.delete<Array<mynote>>(`http://localhost:3000/recommend/${val}`) ;
  // }     
}
