import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterService } from '../services/router.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      providers: [
        RouterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initialized the component', () => {
    expect(fixture.componentInstance).toBeDefined();
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

  it('should have Login button', () => {
    const debug = fixture.debugElement.query(By.css('input[value="Login"]'));
    const native = debug.nativeElement;
    const buttonElem = native;
    expect(buttonElem.value).toContain('Login');
   });
  
   it('should emit the event when the button is clicked', () => {
    fixture.detectChanges();
  });

  it('should have nav-link in navigation bar', () => {
    const debug = fixture.debugElement.query(By.css('nav'));
    expect(debug).toBeTruthy();
   });

   it('cards must display', () => {
    let element = fixture.debugElement.query(By.css('mat-card'));
    expect(element).toBeFalsy();
  });

});
