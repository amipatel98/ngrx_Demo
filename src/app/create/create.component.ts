import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import * as TutorialActions from '../actions/tutorials.actions';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorials.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }
  ngOnInit() {

  }
  addTutorial(name, contact) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, contact: contact }));
  }
  delete(index) {
    console.log(index);
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
  update(name,contact,index){
    console.log(index);
  }

}
