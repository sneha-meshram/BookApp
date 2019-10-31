import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterService } from './router.service';
import { from } from 'rxjs';

describe('RouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterModule.forRoot([])
    ]
  }));

  it('should be created', () => {
    const service: RouterService = TestBed.get(RouterService);
    expect(service).toBeTruthy();
  });
});
