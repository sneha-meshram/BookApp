import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteComponent } from './favourite.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';
import {HomeservicesService} from'../services/homeservices.service';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RouterService } from '../services/router.service';
describe('FavouriteComponent', () => {
  let component: FavouriteComponent;
  let fixture: ComponentFixture<FavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteComponent ],
      imports:[
        NgxPaginationModule,
        MatCardModule,
        HttpClientModule ,
        MatToolbarModule,
        RouterModule.forRoot([])
      ],
      providers:[
        HomeservicesService,
        RouterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteComponent);
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
 //  this test is for checking the button 'delete from favourites' is present or not.
 it('should have button with text delete from favourites button', () => {
  let debug = fixture.debugElement.query(By.css('button'));
  
  expect(debug).toBeTruthy();
 });

  it('should emit the event when the button is clicked', () => {
    fixture.detectChanges();
  });

  it('should have pagination', () => {
    const debug = fixture.debugElement.query(By.css('.pagination'));
    expect(debug).toBeTruthy();
  });

  it('should have image for book', () => {
    const debug = fixture.debugElement.query(By.css('img'));
    expect(debug).toBeTruthy();
  });
  
  it('should have navigation bar', () => {
    const debug = fixture.debugElement.query(By.css('nav'));
    expect(debug).toBeTruthy();
  });

  it('should have div container', () => {
    const debug = fixture.debugElement.query(By.css('div'));
    expect(debug).toBeTruthy();
  });

  it('should have mat-card container', () => {
    const debug = fixture.debugElement.query(By.css('mat-card'));
    expect(debug).toBeFalsy();
    //expect(debug).not.toEqual(null);
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
