import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { ContactComponent } from './+contact';
import { ListComponent } from './+list';
import { AboutComponent } from './+about';
import { PostComponent } from './+post';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'ng2-boilerplate-router-app',
  templateUrl: 'ng2-boilerplate-router.component.html',
  styleUrls: ['ng2-boilerplate-router.component.css'],
  directives: [ROUTER_DIRECTIVES, MdToolbar],
  providers: [ROUTER_PROVIDERS],
  pipes: []
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/contact', component: ContactComponent},
  {path: '/list', component: ListComponent},
  {path: '/about', component: AboutComponent},
   {path: '/post/:id', component: PostComponent}
])

export class Ng2BoilerplateRouterAppComponent {
  title = 'ng2-boilerplate-firebase works!';

  item: Observable<any>;
  items: FirebaseListObservable<any[]>;
  afi:any;

  changeUrl(link: string){
    alert("link");
    //this.router.navigate(['/post', link]);
  }

  constructor(af: AngularFire) {
    this.afi = af;
    this.items = af.database.list('/CONTACTO');
    console.log("items", this.items);
  }

  addToFirebase(nameVar: string, user_idVar:string):void{
    const itemObservable = this.afi.database.list('/CONTACTO');
    itemObservable.push({ name: nameVar, user_id: user_idVar});
  }

  remove(itemKey:string):void{
    alert(itemKey);
    const items = this.afi.database.list('/CONTACTO');
    items.remove(itemKey);
  }


}
