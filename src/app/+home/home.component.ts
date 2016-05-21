import { Component, OnInit } from '@angular/core';
import { MdCard, MdCardHeader} from '@angular2-material/card';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ ROUTER_DIRECTIVES, MdCard, MdCardHeader ],
  providers: [ROUTER_PROVIDERS],
  pipes: []
})
export class HomeComponent implements OnInit {

  item: Observable<any>;
  homes: FirebaseListObservable<any[]>;
  afi:any;
  constructor(af: AngularFire) {
    this.afi = af;
    this.homes = af.database.list('/HOME');
    console.log("items", this.homes);

  }

  ngOnInit() {
  }

}
