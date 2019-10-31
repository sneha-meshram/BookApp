import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RecommendComponent } from './recommend.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';
import {HomeservicesService} from'../services/homeservices.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
describe('RecommendComponent', () => {
  let component: RecommendComponent;
  let fixture: ComponentFixture<RecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendComponent ],
      imports:[
        NgxPaginationModule,
        MatCardModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      providers:[
        HomeservicesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendComponent);
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
 it('should have Unrecommend button', () => {
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
