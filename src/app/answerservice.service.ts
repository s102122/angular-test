import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Answer } from './answer';
import { Answers } from './answers';
 
@Injectable({
  providedIn: 'root'
})
export class AnswerserviceService {
  answer: Answer;

  constructor() { }
  
  getAnswer(): Answer {
	  this.answer = Answers[Math.floor(Math.random() * 20)];
	  return this.answer;
  }	  
}
