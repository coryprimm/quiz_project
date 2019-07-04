const QuizCtrl = require('../controllers/QuizCtrl.js');

module.exports = (app) => {

    app.get('/api/quizzes', QuizCtrl.index);
    app.get('/api/quizzes/terms/:title', QuizCtrl.getterms);
    app.get('/api/quizzes/easyterms/:title', QuizCtrl.geteasyterms);
    app.get('/api/quizzes/hardterms/:title', QuizCtrl.gethardterms);
    app.post('/api/quizzes', QuizCtrl.create);
    app.get('/api/quizzes/:id', QuizCtrl.show);
    //return this._http.get(`/api/authors/edit/${id}`);
    // app.delete('/api/quizzes/delete/:id', QuizCtrl.destroyaction); 
    app.post('/api/quizzes/term/:title', QuizCtrl.createterm);     
    app.put('/api/quizzes/term/:id', QuizCtrl.easyterm);
    app.put('/api/quizzes2/term/:id', QuizCtrl.hardterm);
    //(`/api/quizzes/${id}`);

}