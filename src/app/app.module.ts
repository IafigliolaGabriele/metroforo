import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services

import { AnswerService } from './services/answer.service';
import { AuthService } from './services/auth.service';
import { QuestionService } from './services/question.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnswerService,AuthService,QuestionService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
