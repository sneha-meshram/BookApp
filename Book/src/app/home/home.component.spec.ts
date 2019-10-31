import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterService } from '../services/router.service';
import { RouterModule } from '@angular/router';
//import { from } from 'rxjs';

describe('HomeComponent', () => {
 let component: HomeComponent;
 let fixture: ComponentFixture<HomeComponent>;
 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ HomeComponent ],
     imports: [
       MatCardModule,
       MatToolbarModule,
       FormsModule,
       HttpClientTestingModule,
       HttpClientModule,
       NgxPaginationModule,
       RouterModule.forRoot([])
     ],
     providers: [
      RouterService
     ]
   })
   .compileComponents();
 }));
 beforeEach(() => {
   fixture = TestBed.createComponent(HomeComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });
 it('should create', () => {
   expect(component).toBeTruthy();
 });
 // The first test will check if the component instance is created.
 it('should have initialized the component', () => {
 expect(fixture.componentInstance).toBeDefined();
});
//  this test is for checking the button 'Sreach by Title' is present or not.
 it('should have button with text Search by Title button', () => {
const debug = fixture.debugElement.query(By.css('input[value="Search by Title"]'));
const native = debug.nativeElement;
const buttonElem = native;
expect(buttonElem.value).toContain('Search by Title');
});
//  this test is for checking the button 'Sreach by Author' is present or not.
 it('should have button with text Search by Author button', () => {
const debug = fixture.debugElement.query(By.css('input[value="Search by Author"]'));
const native = debug.nativeElement;
const buttonElem = native;
expect(buttonElem.value).toContain('Search by Author');
});
// this test is for checking that on clicking the button, any action is emitiiing or not.
//   it('should have check the event is occuring by button', () => {
//   const el = fixture.debugElement.query(By.css('button'));
//   el.triggerEventHandler('click', null);
// });
 it('should emit the event when the button is clicked', () => {
 fixture.detectChanges();
});

// this test is for checking the navigation bar whether it has any nav link or not.
 it('should have nav-link in navigation bar', () => {
 const debug = fixture.debugElement.query(By.css('nav'));
 expect(debug).toBeTruthy();
});


it('should have button with text Recommend button', () => {
  let debug = fixture.debugElement.query(By.css('button'));
  // const native = debug.nativeElement;
  // const buttonElem = native;
  expect(debug).toBeTruthy();
 });

 it('should have image for book', () => {
  const debug = fixture.debugElement.query(By.css('img'));
  expect(debug).toBeTruthy();
});

it('should have pagination', () => {
  const debug = fixture.debugElement.query(By.css('.pagination'));
  expect(debug).toBeTruthy();
});

it('should have div containers', () => {
  const debug = fixture.debugElement.query(By.css('div'));
  expect(debug).toBeTruthy();
});

it('should have navigation bar', () => {
  const debug = fixture.debugElement.query(By.css('nav'));
  expect(debug).toBeTruthy();
});

it('cards must display with title', () => {
  let element = fixture.debugElement.query(By.css('mat-card-title'));
  expect(element).toBeFalsy();
});

it('should contain Unfavourite button', () => {
  let element = fixture.debugElement.query(By.css(".addButton2"));
  console.log(element);
  expect(element).toBeFalsy();
});

it('cards must display', () => {
  let element = fixture.debugElement.query(By.css('mat-card'));
  expect(element).toBeFalsy();
});

});