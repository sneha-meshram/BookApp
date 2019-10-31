import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RouterService } from '../services/router.service';
import { SignupUser } from '../signup';
import { AuthService } from '../services/auth.service';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let auth: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    auth = fixture.debugElement.injector.get(AuthService);
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

  it('should contain input element for password and should be blank', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.value).toBe('');
  });

  it('should have Register button', () => {
    let debug = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(debug).toBeTruthy();
   });

   it('should emit the event when the button is clicked', () => {
    fixture.detectChanges();
  });

   it('should contain profile image', () => {
    let element = fixture.debugElement.query(By.css('input[type="file"]'));
    expect(element).toBeTruthy();
     expect(element.nativeElement.value).toBe('');
  });

  xit('should call the right method on auth service with right parameter, success is handled', () => {
    spyOn(auth, 'addUser').and.callThrough();

    let dummyUser = new SignupUser();
    
    dummyUser.fullname = 'Neha Palod';
    dummyUser.email = 'neha@gmail.com';
    dummyUser.password = 'neha1234';

    component.newUser = dummyUser;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css('button'));

    element.nativeElement.click();

    fixture.detectChanges();

    expect(auth.addUser).toHaveBeenCalledWith(dummyUser);

 });

//  it('should call the right method on auth service with right parameter, success is handled', () => {
//   spyOn(auth, 'getUser').and.callThrough();

//   let dummyUser = new SignupUser();
//   dummyUser.id = 1;
//   dummyUser.FullName = 'Neha Palod';
//   dummyUser.Email = 'neha@gmail.com';
//   dummyUser.Password = 'neha1234';

//   component.Users = dummyUser;
  
//   fixture.detectChanges();
//   let element = fixture.debugElement.query(By.css('button'));

//   element.nativeElement.click();

//   fixture.detectChanges();

//   expect(auth.getUser).toHaveBeenCalledWith(dummyUser);

// })
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
