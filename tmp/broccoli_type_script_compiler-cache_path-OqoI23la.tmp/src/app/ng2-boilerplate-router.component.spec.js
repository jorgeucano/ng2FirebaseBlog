"use strict";
var testing_1 = require('@angular/core/testing');
var ng2_boilerplate_router_component_1 = require('../app/ng2-boilerplate-router.component');
testing_1.beforeEachProviders(function () { return [ng2_boilerplate_router_component_1.Ng2BoilerplateRouterAppComponent]; });
testing_1.describe('App: Ng2BoilerplateRouter', function () {
    testing_1.it('should create the app', testing_1.inject([ng2_boilerplate_router_component_1.Ng2BoilerplateRouterAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'ng2-boilerplate-router works!\'', testing_1.inject([ng2_boilerplate_router_component_1.Ng2BoilerplateRouterAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('ng2-boilerplate-router works!');
    }));
});
//# sourceMappingURL=ng2-boilerplate-router.component.spec.js.map