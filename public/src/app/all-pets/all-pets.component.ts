import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  allQuizzes: any;
  quiz: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllQuizzes();
  }
  getAllQuizzes(){
    let obs = this._httpService.getAllQuizzes();
    obs.subscribe(data => {
      console.log(data);
      this.allQuizzes = data;
    })
  }


  }
  
