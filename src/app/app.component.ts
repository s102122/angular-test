import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AnswerserviceService } from './answerservice.service';


import { Answers } from './answers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: FormGroup;
  title = 'angular herexamen';
  answer_result: string;
  
  constructor(public answerserviceService: AnswerserviceService ) {}
  
  ngOnInit() {
	  this.search = new FormGroup({
         name: new FormControl('')
       });
  }
  
  onSubmit() {
	  this.answer_result = '1';
	  this.title = '1';
	  
  } 
}
