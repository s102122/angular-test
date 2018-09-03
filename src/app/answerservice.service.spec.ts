import { TestBed, inject } from '@angular/core/testing';

import { AnswerserviceService } from './answerservice.service';

describe('AnswerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerserviceService]
    });
  });

  it('should be created', inject([AnswerserviceService], (service: AnswerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
