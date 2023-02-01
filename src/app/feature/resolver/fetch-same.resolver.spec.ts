import { TestBed } from '@angular/core/testing';

import { FetchSameResolver } from './fetch-same.resolver';

describe('FetchSameResolver', () => {
  let resolver: FetchSameResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchSameResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
