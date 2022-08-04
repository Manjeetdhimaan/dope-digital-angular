"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, router, activatedRoute, blogService, metaService) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.metaService = metaService;
        this.title = 'dope-digital-angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var activatedUrl;
        var appTitle = this.titleService.getTitle();
        this.router
            .events.pipe(rxjs_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), rxjs_1.map(function () {
            //getting name from url 
            var routerUrl_split = _this.router.url.slice(1).split("-");
            var result = [];
            for (var i = 0; i < routerUrl_split.length; i++) {
                result.push(routerUrl_split[i].slice(0, 1).toUpperCase() + routerUrl_split[i].slice(1));
            }
            var child = _this.activatedRoute.firstChild;
            _this.blogService.blogsArray.map(function (a) {
                if (child === null || child === void 0 ? void 0 : child.snapshot.data['title']) {
                    if (_this.router.url.toLowerCase() === "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
                        child.snapshot.data['title'] = a.metaTitle + ' - ' + 'Dope Digital';
                        _this.metaService.updateTag({ property: 'og:url', content: "https://www.dopedigital.in/" + _this.router.url.slice(1) });
                        _this.metaService.updateTag({ name: 'description', content: a.metaDesc });
                        return child.snapshot.data['title'];
                    }
                }
                if (_this.router.url.toLowerCase() === "/blogs") {
                    return 'BLOGS - Dope Digital';
                }
            });
            if (child === null || child === void 0 ? void 0 : child.snapshot.data['title']) {
                _this.metaService.updateTag({ name: 'description', content: child.snapshot.data['title'] });
                return child.snapshot.data['title'];
            }
            return appTitle;
        })).subscribe(function (ttl) {
            _this.titleService.setTitle(ttl);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//  setTitle(newTitle: string) {
//   this.titleService.setTitle(newTitle);
// }
