import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  item: any;
  constructor(private title: Title, private meta: Meta,db: AngularFirestore,private router: Router,private route: ActivatedRoute) {
    const postId = this.route.snapshot.paramMap.get('id');
    db.collection('posts').doc(postId).valueChanges().subscribe(data=>{
      this.item = data;
      this.meta.addTags([
        { name: 'og:title', content: this.item.title },
        { name: 'og:description', content: this.item.text }
      ]);
    });
  }

  ngOnInit() {
    // this.title.setTitle(this.data.name);
  }

}
