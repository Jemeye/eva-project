import { Component, OnInit } from '@angular/core';
import { TestService  } from '../services/test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public questionList: any=[];
  public currentQuestion :number=0;
  constructor(private testService: TestService ) { }

  ngOnInit(): void {
  this.getAllQuestions();
  }
  getAllQuestions(){
    this.testService.getQuestionJson()
      .subscribe(res=>{
        this.questionList=res.questions;});



  }
}
