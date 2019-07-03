import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services

import { AnswerService } from './services/answer.service';
import { AuthService } from './services/auth.service';
import { QuestionService } from './services/question.service';
import { UserService } from './services/user.service';
import { AboutComponent } from './about/about.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [AnswerService,AuthService,QuestionService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
