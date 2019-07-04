import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-pet',
  templateUrl: './single-pet.component.html',
  styleUrls: ['./single-pet.component.css']
})
export class SinglePetComponent implements OnInit {
  quiz: any;
  singleQuiz: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.singleQuiz = {name: '', type: '', description: '', skill1: '', skill2: '', skill3: '' };
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
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
  // deleteThisPet(pet){
  //   let obs = this._httpService.deletePet(pet);
  //   obs.subscribe(data => {
  //     console.log(data);
  //     this._router.navigate(['/pets']);
  //   })

  // }
}
