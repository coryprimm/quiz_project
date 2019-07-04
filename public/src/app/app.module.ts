import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { SinglePetComponent } from './single-pet/single-pet.component';
import { AddcardComponent } from './addcard/addcard.component';
import { UmbrellaComponent } from './umbrella/umbrella.component';
import { RandoComponent } from './rando/rando.component';
import { HardcomponentComponent } from './hardcomponent/hardcomponent.component';
import { EasycomponentComponent } from './easycomponent/easycomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    NewPetComponent,
    SinglePetComponent,
    AddcardComponent,
    UmbrellaComponent,
    RandoComponent,
    HardcomponentComponent,
    EasycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
