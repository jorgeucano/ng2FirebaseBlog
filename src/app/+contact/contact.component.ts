import { Component, OnInit } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import {MdButton} from '@angular2-material/button';
import { MdCard, MdCardHeader} from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton, MdCard, MdCardHeader, MdInput],
  providers: [ROUTER_PROVIDERS],
})
export class ContactComponent implements OnInit {

  ngOnInit() {
  }

  item: Observable<any>;
  items: FirebaseListObservable<any[]>;
  afi:any;

  constructor(af: AngularFire) {
    this.afi = af;
  }

  addToFirebase(companyVar:string, nameVar: string, emailVar:string, sugerenciasVar:string):void{
    const itemObservable = this.afi.database.list('/EMAILS');
    if (itemObservable.push({ company:companyVar, name: nameVar, email: emailVar, sugerencias:sugerenciasVar})) {
      alert(name);
    }
  }

}
