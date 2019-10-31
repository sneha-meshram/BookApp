import { TestBed } from '@angular/core/testing';

import { HomeservicesService } from './homeservices.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomeservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: HomeservicesService = TestBed.get(HomeservicesService);
    expect(service).toBeTruthy();
  });
});
