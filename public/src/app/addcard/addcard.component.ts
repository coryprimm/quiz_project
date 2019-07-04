import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {
  quiz: any;
  singleQuiz: any;
  newTerm: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newTerm = {question: '', answer: '', quiztitle: '', memory: '', mnemonic: ''};
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      console.log("67832462387462398476124789236491287642387946129874623789462134789623479823164978126");
      this.getQuiz(params['id']);
    });
  }
  getQuiz(id){
    console.log("chimpanzees");
    let obs= this._httpService.getQuiz(id);
    console.log("***********");
    obs.subscribe(data => {
      console.log("----------");
      console.log(data);
      console.log("bananas");
      this.quiz = data;

    })
  }
  addTheseToExistingFile(quiz) {
    console.log("8753209857342089574893549352");
    console.log(quiz.title);
    console.log("8753209857342089574893549352");
    this.newTerm.quiztitle = quiz.title;
    console.log(this.newTerm.quiztitle);
    let obs = this._httpService.createTerm(this.newTerm, quiz);
    obs.subscribe((data: any) => {
      if (data.errors){
        console.log(data.errors);
      }
      else{
        this._router.navigate(['/quizzes/' + quiz._id + '/details']);
      }
    } )
  }
}
