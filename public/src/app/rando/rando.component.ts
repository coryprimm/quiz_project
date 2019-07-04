import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-rando',
  templateUrl: './rando.component.html',
  styleUrls: ['./rando.component.css']
})
export class RandoComponent implements OnInit {
  allQuizzes: any;
  quiz: any;
  allTerms: any;
  term: any;
  id: any;
  show: Boolean;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {//#1
  this.show = false;
   this.term = this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = (params['id']);
      this.getQuiz(params['id']);      
    });
    
  }

  getQuiz(id){
    let obs = this._httpService.getQuiz(id);
    obs.subscribe(data => {
      this.getAllTermsFromThisQuiz(data);
    })
  }

  getAllTermsFromThisQuiz(quiz){//#3

    let obs = this._httpService.getAllTermsFromThisQuiz(quiz);
    obs.subscribe(data => {
      console.log(data);

      this.allTerms = data;

      let allTerms2 = this.allTerms;

      this.term = this.allTerms[Math.floor(Math.random()*allTerms2.length)];
      return this.term;
    })
  }
  clickme(){
    this.show = false;
    this.term = this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = (params['id']);
      this.getQuiz(params['id']);     
  })

  }
  showAnswer(){
    this.show = true;
  }
  hideme(){
    this.show = false;
  }
 easyFunction(term){
  this.term.memory = "easy";
  let obs = this._httpService.addEasy(term);
    obs.subscribe((data: any) => {
      })
  }
  hardFunction(term){
    this.term.memory = "hard"
    let obs = this._httpService.addHard(term);
      obs.subscribe((data: any) => {
        })
    }
}



