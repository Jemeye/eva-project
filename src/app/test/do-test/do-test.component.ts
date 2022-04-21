import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.css']
})
export class DoTestComponent implements OnInit {
  public questionList: any=[];
  public currentQuestion :number=0;
  public topic: string="";
  progress:string="0";
  public anws:boolean=false;
  isQuizCompleted:boolean=false;
  constructor(private testService: TestService ) { }


  ngOnInit(): void {
    this.getAllQuestions();
  }
  getAllQuestions(){
    this.testService.getQuestionJson()
      .subscribe(res=>{
        this.questionList=res.questions;});



  }
  nextQuestion(){
    this.currentQuestion++;
  }
  previousQuestion(){
    this.currentQuestion--;
  }
  answer(currentQuestion:number,option:any){

    if(currentQuestion=== this.questionList.lenght){
      this.isQuizCompleted=true;
    }
    this.anws=true;
    setTimeout(()=>{
      this.currentQuestion++;
      this.getProgress();
    },1000)
  }
  getProgress(){
    this.progress=((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }

}
