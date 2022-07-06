"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.carouselHeight = 480;
        this.cellsToShow = 4;
        this.isLoading = false;
        this.customOptionshome = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 2400,
            autoplayHoverPause: false,
            navSpeed: 1000,
            navText: ['<<', '>>'],
            responsive: {
                0: {
                    "items": 1
                },
                480: {
                    "items": 1
                },
                768: {
                    "items": 1
                },
                992: {
                    "items": 1
                },
                1200: {
                    "items": 1
                }
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.latestBlogs = this.blogService.getBlogs().slice(-3).reverse();
        this.isLoading = false;
    };
    HomeComponent.prototype.onNavigate = function (blog) {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
        var selectedBlog = blog.title.toLowerCase().split(' ').join('-');
        this.router.navigate(['/blogs/', selectedBlog]);
    };
    HomeComponent.prototype.onNavigateTo = function (route) {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
        this.router.navigate([route]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
