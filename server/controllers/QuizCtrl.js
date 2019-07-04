const mongoose = require('mongoose');
const Term = mongoose.model('Term');
const Quiz = mongoose.model('Quiz');

module.exports = {
    index: (req, res) => {
      Quiz.find({}, (err, quizzes) => {
          if(err){
              console.log(err);
              res.json(err);
          } else {
              console.log(quizzes);
              res.json(quizzes);
          }
      })  
    },
    create: (req, res) => {
        console.log("in the controller");
        console.log("---------------------------");
                console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        console.log(req.body);
        Quiz.create(req.body, (err, quiz) => {
            if(err){
                console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
                console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
                console.log(err);
                console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
                console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
                res.json(err);
            } else {
                console.log(quiz);
                res.json(quiz);
            }
        })  
      },
      createterm: (req, res) => {
        console.log("BRRRRR");
        console.log(req.params.title);
        Term.create(req.body, { runValidators: true }, (err, term) => {
            if(err){
                console.log(err);
                res.json(err);
            } else {
                console.log(term);
                res.json(term);
            }
        })  
      },
      getterms: (req, res) => {
        console.log(req.params.title);
        Term.find({quiztitle: req.params.title}, (err, terms) => {
            if(err){
                console.log("%&^*%*&%*&^%&*");
                console.log(err);
                res.json(err);
            } else {
                console.log(terms);
                res.json(terms);
            }
        })  
      },
      geteasyterms: (req, res) => {
        console.log(req.params.title);
        Term.find({quiztitle: req.params.title, memory: "easy"}, (err, terms) => {
            if(err){
                console.log("%&^*%*&%*&^%&*");
                console.log(err);
                res.json(err);
            } else {
                console.log(terms);
                res.json(terms);
            }
        })  
      },
      gethardterms: (req, res) => {
        console.log(req.params.title);
        Term.find({quiztitle: req.params.title, memory: "hard"}, (err, terms) => {
            if(err){
                console.log("%&^*%*&%*&^%&*");
                console.log(err);
                res.json(err);
            } else {
                console.log(terms);
                res.json(terms);
            }
        })  
      },
      show: (req, res) => {
        Quiz.findOne({_id: req.params.id }, (err, quiz) => {
            if(err){
                console.log("100");
                console.log(err);
                res.json(err);
            } else {
                console.log("200");
                console.log(quiz);
                res.json(quiz);
            }
        })  
      }, 
      easyterm:  (req, res) => {
        Term.update({_id: req.params.id}, {question: req.body.question, answer: req.body.answer, quiztitle: req.body.quiztitle, memory: req.body.memory }, (err, term) => {
            if(err){
                res.json(err);
            } else {
                res.json(term);
            }
        })
    } ,  
    hardterm:  (req, res) => {
        Term.update({_id: req.params.id}, {question: req.body.question, answer: req.body.answer, quiztitle: req.body.quiztitle, memory: req.body.memory }, (err, term) => {
            if(err){
                res.json(err);
            } else {
                res.json(term);
            }
        })
    }       
}
    //   edit: (req, res) => {
    //     Pet.update({_id: req.params.id}, {name: req.body.name, type:req.body.type, description:req.body.description, skill1:req.body.skill1, skill2:req.body.skill2, skill3:req.body.skill3 }, { runValidators: true }, (err, pet) => {
    //         if(err){
    //             console.log("100");
    //             console.log(err);
    //             res.json(err);
    //         } else {
    //             console.log("200");
    //             console.log(pet);
    //             res.json(pet);
    //         }
    //     })  
    //   },
    //   destroyaction: (req, res) => {
    //     console.log("Here at the delete action");
        
    //     Pet.deleteOne({_id: req.params.id}, (err, result)=>{
    //     console.log("HOWDY");
    //     if (err) {
    //         res.json(err);}
    //     else{
    //         res.json(result);
    //     }
    //     });
    // },

    // var flag = false;
    //         if (req.body.name.length < 3){
    //             errcheck[1] = "Name must be 3 or more characters";
    //             flag = true;
    //         }
    //         if (req.body.type.length < 3){
    //             errcheck[2] = "Type must be 3 or more characters";
    //             flag = true;
    //         }
    //         if (req.body.description.length < 3){
    //             errcheck[3] = "Description must be 3 or more characters";
    //             flag = true;
    //         }
    //         if (flag == true){
    //             res.json(errcheck);

    //         } else {