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
var router_1 = require('@angular/router');
var angularfire2_1 = require('angularfire2');
var button_1 = require('@angular2-material/button');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var ContactComponent = (function () {
    function ContactComponent(af) {
        this.afi = af;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.addToFirebase = function (companyVar, nameVar, emailVar, sugerenciasVar) {
        var itemObservable = this.afi.database.list('/EMAILS');
        if (itemObservable.push({ company: companyVar, name: nameVar, email: emailVar, sugerencias: sugerenciasVar })) {
            alert(name);
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contact',
            templateUrl: 'contact.component.html',
            styleUrls: ['contact.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, button_1.MdButton, card_1.MdCard, card_1.MdCardHeader, input_1.MdInput],
            providers: [router_1.ROUTER_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map