import { TestBed, async, inject } from '@angular/core/testing';

import { CanactivateGuard } from './canactivate.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('CanactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      providers: [CanactivateGuard]
    });
  });

  it('should ...', inject([CanactivateGuard], (guard: CanactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
