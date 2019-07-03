import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore,private router: Router) {
    this.items = db.collection('posts').valueChanges();
  }

  ngOnInit() {
  }

  navigate(item){
    this.router.navigate(['post','EDVKwHMTbRaTS1bYmXZJ'])
  }

}
