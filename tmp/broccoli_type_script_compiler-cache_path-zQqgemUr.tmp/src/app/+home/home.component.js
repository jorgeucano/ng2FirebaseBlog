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
var card_1 = require('@angular2-material/card');
var router_1 = require('@angular/router');
var angularfire2_1 = require('angularfire2');
var HomeComponent = (function () {
    function HomeComponent(af) {
        this.afi = af;
        this.homes = af.database.list('/HOME');
        console.log("items", this.homes);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, card_1.MdCard, card_1.MdCardHeader],
            providers: [router_1.ROUTER_PROVIDERS],
            pipes: []
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map