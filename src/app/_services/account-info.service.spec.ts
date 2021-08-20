/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AccountInfoService } from './account-info.service';

describe('Service: AccountInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountInfoService]
    });
  });

  it('should ...', inject([AccountInfoService], (service: AccountInfoService) => {
    expect(service).toBeTruthy();
  }));
});
