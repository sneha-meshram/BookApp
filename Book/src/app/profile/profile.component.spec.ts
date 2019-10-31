import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { RouterService } from '../services/router.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        RouterModule.forRoot([])
      ],
      providers: [
        RouterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initialized the component', () => {
    expect(fixture.componentInstance).toBeDefined();
   });
   
  it('should contain input element for FullName and should be blank', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.value).toBe('');
  });

  it('should contain input element for email and should be blank', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.value).toBe('');
  });
  
  it('should contain input element for current password and should be blank', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.value).toBe('');
  });

  it('should contain input element for new password and should be blank', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.value).toBe('');
  });

  // it('should have Submit button', () => {
  //   const debug = fixture.debugElement.query(By.css('input'));
  //   const native = debug.nativeElement;
  //   const buttonElem = native;
  //   expect(buttonElem.value).toBeFalsy();
  //   expect(buttonElem.nativeElement.value).toBe('');
  //  });

   it('should have Submit button', () => {
    let debug = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(debug).toBeTruthy();
   });

   it('should contain profile image', () => {
    let element = fixture.debugElement.query(By.css('input[type="file"]'));
    expect(element).toBeTruthy();
     expect(element.nativeElement.value).toBe('');
  });

  it('should emit the event when the button is clicked', () => {
    fixture.detectChanges();
  });

  it('should have nav-link in navigation bar', () => {
    const debug = fixture.debugElement.query(By.css('nav'));
    expect(debug).toBeTruthy();
   });

   it('cards must display with title', () => {
    let element = fixture.debugElement.query(By.css('mat-card-title'));
    expect(element).toBeTruthy();
  });

  it('cards must display', () => {
    let element = fixture.debugElement.query(By.css('mat-card'));
    expect(element).toBeTruthy();
  });
  
});
