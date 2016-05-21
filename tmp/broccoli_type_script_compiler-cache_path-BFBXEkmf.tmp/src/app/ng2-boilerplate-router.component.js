"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _home_1 = require('./+home');
var _contact_1 = require('./+contact');
var _list_1 = require('./+list');
var _about_1 = require('./+about');
var router_1 = require('@angular/router');
var angularfire2_1 = require('angularfire2');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var Ng2BoilerplateRouterAppComponent = (function () {
    function Ng2BoilerplateRouterAppComponent(af) {
        this.title = 'ng2-boilerplate-firebase works!';
        this.afi = af;
        this.items = af.database.list('/CONTACTO');
        console.log("items", this.items);
    }
    Ng2BoilerplateRouterAppComponent.prototype.addToFirebase = function (nameVar, user_idVar) {
        var itemObservable = this.afi.database.list('/CONTACTO');
        itemObservable.push({ name: nameVar, user_id: user_idVar });
    };
    Ng2BoilerplateRouterAppComponent.prototype.remove = function (itemKey) {
        alert(itemKey);
        var items = this.afi.database.list('/CONTACTO');
        items.remove(itemKey);
    };
    Ng2BoilerplateRouterAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng2-boilerplate-router-app',
            templateUrl: 'ng2-boilerplate-router.component.html',
            styleUrls: ['ng2-boilerplate-router.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar, button_1.MdButton, sidenav_1.MdSidenavLayout, sidenav_1.MdSidenav],
            providers: [router_1.ROUTER_PROVIDERS],
            pipes: []
        }),
        router_1.Routes([
            { path: '/', component: _home_1.HomeComponent },
            { path: '/home', component: _home_1.HomeComponent },
            { path: '/contact', component: _contact_1.ContactComponent },
            { path: '/list', component: _list_1.ListComponent },
            { path: '/about', component: _about_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], Ng2BoilerplateRouterAppComponent);
    return Ng2BoilerplateRouterAppComponent;
}());
exports.Ng2BoilerplateRouterAppComponent = Ng2BoilerplateRouterAppComponent;
//# sourceMappingURL=ng2-boilerplate-router.component.js.map