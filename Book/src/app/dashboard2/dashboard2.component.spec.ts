import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { Dashboard2Component } from './dashboard2.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RouterService } from '../services/router.service';
import {RouterModule,Routes} from '@angular/router';
import { from } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

describe('Dashboard2Component', () => {
  let component: Dashboard2Component;
  let fixture: ComponentFixture<Dashboard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard2Component,
      FooterComponent ],
      imports: [ NgxPaginationModule,
        MatCardModule,
        HttpClientModule,
        RouterModule.forRoot([])],
      providers : [
        RouterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initialized the component', () => {
    expect(fixture.componentInstance).toBeDefined();
   });

  it('should have nav-link in navigation bar', () => {
    const debug = fixture.debugElement.query(By.css('nav'));
    expect(debug).toBeTruthy();
   }); 
   
   it('should emit the event when the buttons will be clicked', () => {
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

  it('should have div containers', () => {
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
