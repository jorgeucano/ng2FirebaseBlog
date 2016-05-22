import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../+home';
import { ContactComponent } from '../+contact';
import { AboutComponent } from '../+about';
import {Ng2BoilerplateRouterAppComponent} from '../';
import { MdCard, MdCardHeader} from '@angular2-material/card';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [ ROUTER_DIRECTIVES, MdCard, MdCardHeader ],
  providers: [ROUTER_PROVIDERS],
  pipes: []
})

export class ListComponent implements OnInit {

  item: Observable<any>;
  list: FirebaseListObservable<any[]>;
  afi:any;
  constructor(af: AngularFire) {
    this.afi = af;
    this.list = af.database.list('/LIST');
  }

  onSelect(link: string) {
    console.log(link);
    //return this.ng2.changeUrl(link);
  }

  ngOnInit() {
  }
}
