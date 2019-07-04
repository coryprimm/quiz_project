import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  newQuiz: any;
  errorsObject: any;
  

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log("pandas");
    this.newQuiz = { title: '', description: '', author: '' };
    console.log(this.newQuiz.author);
    this.errorsObject = this.errorsObject;

  }
  createNewQuiz() {
    console.log("HJKHLJKHJLKHJLKHLJKH");
    console.log(this.newQuiz);
    let obs = this._httpService.createQuiz(this.newQuiz);
    obs.subscribe((data: any) => {
      if (data.errors){ 
        this.errorsObject = data.errors;
        console.log(this.errorsObject);
        // this._router.navigate(['quizzes']);
      }
      else{
        this._router.navigate(['quizzes']);
      }
    } )
  }
//   clickEventDesc(event){
//     //Haven't really got far
//     var targetEle = event.srcElement.attributes.class;        
//  }     
//  clickEventTitle(event){
//   //Haven't really got far
//   var targetEle = event.srcElement.attributes.class;        
// }     
// clickEventAuthor(event){
//   //Haven't really got far
//   var targetEle = event.srcElement.attributes.class;        
// }     
}
