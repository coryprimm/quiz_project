import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { SinglePetComponent } from './single-pet/single-pet.component';
import { AddcardComponent } from './addcard/addcard.component';
import { UmbrellaComponent } from './umbrella/umbrella.component';
import { RandoComponent } from './rando/rando.component';
import { EasycomponentComponent } from './easycomponent/easycomponent.component';
import { HardcomponentComponent } from './hardcomponent/hardcomponent.component';


const routes: Routes = [                             //numbered when you would visit...
  { path: 'quizzes', component: AllPetsComponent }, //3
  { path: 'quizzes/new', component: NewPetComponent }, //['/quizzes', quiz._id, 'secondpage'] //1
  { path: 'quizzes/:id/details', component: SinglePetComponent }, //2
  { path: 'quizzes/:id/add', component: AddcardComponent }, //5
  { path: 'quizzes/:id/umbrella', component: UmbrellaComponent },
  { path: 'quizzes/:id/quizyourself', component: RandoComponent }, //4
  { path: 'quizzes/:id/easyquiz', component: EasycomponentComponent }, //6
  { path: 'quizzes/:id/hardquiz', component: HardcomponentComponent }, //7
  { path: '', pathMatch: 'full', redirectTo: '/quizzes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//platform example how to nested route

// const routes: Routes = [
//   { path: 'products', component: ProductComponent, children: [
//       { path: 'details/:id', component: ProductDetailComponent },
//       { path: 'brand/:brand', component: BrandComponent },
//       { path: 'category/:cat', component: CategoryComponent }]
//   },
//   { path: 'reviews', component: ReviewComponent, children: [
//       { path: 'details/:id', component: ReviewDetailComponent },
//       { path: 'author/:id', component: AuthorComponent },
//       { path: 'all/:id', component: AllreviewsComponent }]
//   }
// ]
