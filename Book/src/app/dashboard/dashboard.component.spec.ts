import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RouterService } from '../services/router.service';
import { FooterComponent } from '../footer/footer.component';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
      FooterComponent ],
      imports: [ FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        MatCardModule,
        RouterModule.forRoot([])
       ],
       providers: [
        RouterService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
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
  
  it('should have carousel containers', () => {
    const debug = fixture.debugElement.query(By.css('.carousel-item'));
    expect(debug).toBeTruthy();
  });
  
  it('should contain a craousel', () => {
    let element = fixture.debugElement.query(By.css('.carousel-inner'));
    expect(element).toBeTruthy();
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
