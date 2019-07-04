import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAllQuizzes() {
    return this._http.get('/api/quizzes');
  }
  //getAllTerms()
  getAllTermsFromThisQuiz(quiz) {
    return this._http.get(`/api/quizzes/terms/${quiz.title}`);
  }
  getAllEasyTermsFromThisQuiz(quiz) {
    return this._http.get(`/api/quizzes/easyterms/${quiz.title}`);
  }
  getAllHardTermsFromThisQuiz(quiz) {
    return this._http.get(`/api/quizzes/hardterms/${quiz.title}`);
  }
  createQuiz(newQuiz) {
    console.log("Blue Trees");
    console.log(newQuiz);
    return this._http.post('/api/quizzes', newQuiz);
  }
  getQuiz(id: any) {
    console.log("grapes");
    console.log(id);
    console.log("hjskadfhskdjfhsakjlfhj");
    return this._http.get(`/api/quizzes/${id}`);
  }
  editQuiz(quiz: any) {
    console.log("Step10?");
    console.log(quiz);
    console.log("everything");
    console.log(quiz._id);
    console.log("nothing");
    return this._http.put(`/api/quizzes/edit/${quiz._id}`, quiz);
  }
  deleteQuiz(quiz: any) {
    return this._http.delete(`/api/quizzes/delete/${quiz._id}`, quiz);
  }
  createTerm(newTerm: any, quiz: any) {
    console.log("I was here");
    return this._http.post(`/api/quizzes/term/${quiz.title}`, newTerm);
  }
  addEasy(term){
    console.log("in the service");
    console.log(term);
    return this._http.put(`/api/quizzes/term/${term._id}`, term);
}
addHard(term){
  console.log("in the service");
  console.log(term);
  return this._http.put(`/api/quizzes2/term/${term._id}`, term);
}
}
