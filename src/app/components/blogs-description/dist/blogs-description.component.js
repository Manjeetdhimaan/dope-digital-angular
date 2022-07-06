"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogsDescriptionComponent = void 0;
var core_1 = require("@angular/core");
var BlogsDescriptionComponent = /** @class */ (function () {
    function BlogsDescriptionComponent(blogService, router, activatedRoute) {
        var _this = this;
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isLoading = false;
        router.events
            .subscribe(function (event) {
            if (event.navigationTrigger === 'popstate') {
                _this.isLoading = true;
                // this.recentPost = this.blogService.getnewsArray().slice(-8).reverse();
                // this.newsArray = this.blogService.getNews();
                activatedRoute.params.subscribe(function (param) {
                    _this.blogService.getBlogs().map(function (a) {
                        if (param['blog'].toLowerCase() == a.urlTitle.toLowerCase().split(' ').join('-')) {
                            _this.blog = a;
                            // this.dobOfnews = this.news.dob.year;
                            // this.relatedPostArray = [];
                            var newsArray = _this.blogService.getBlogs().slice();
                            // let suffledArray = newsArray.sort(() => 0.5 - Math.random());
                            // this.relatedPostArray = suffledArray.filter((news: any) => news.categoryId.toLowerCase() === this.news.categoryId.toLowerCase());
                            _this.isLoading = false;
                        }
                    });
                });
            }
        });
    }
    BlogsDescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        this.blogsArray = this.blogService.getBlogs();
        this.isLoading = true;
        // this.recentPost = this.blogService.getBlogs().slice(-8).reverse();
        this.blogsArray = this.blogService.getBlogs();
        this.blogService.getBlogs().map(function (a) {
            if (_this.router.url.toLowerCase() == "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
                _this.router.url.toLowerCase();
                _this.blog = a;
                // this.dobOfnews = this.news.dob.year;
                // this.relatedPostArray = [];
                var celebrities = _this.blogService.getBlogs().slice(-10).reverse();
                _this.moreBlogs = celebrities.sort(function () { return 0.5 - Math.random(); });
                _this.latestBlogs = _this.blogService.getBlogs().slice(-8).reverse();
                // this.relatedPostArray = suffledArray.filter((news: any) => news.categoryId.toLowerCase() === this.news.categoryId.toLowerCase());
                // this.meta.updateTag({ property: 'og:url', content: `https://www.newsfarmers.com/news/${a.title.toLowerCase().split(' ').join('-')}` });
                _this.isLoading = false;
            }
        });
        if (this.router.url.toLowerCase() !== "/blogs/" + ((_a = this.blog) === null || _a === void 0 ? void 0 : _a.urlTitle.toLowerCase().split(' ').join('-'))) {
            this.router.navigate(['/']);
            this.isLoading = false;
        }
    };
    BlogsDescriptionComponent.prototype.onNavigate = function (blog) {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
        this.blog = blog;
        var selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
        this.router.navigate(['/blogs/', selectedBlog]);
    };
    BlogsDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'app-blogs-description',
            templateUrl: './blogs-description.component.html',
            styleUrls: ['./blogs-description.component.css']
        })
    ], BlogsDescriptionComponent);
    return BlogsDescriptionComponent;
}());
exports.BlogsDescriptionComponent = BlogsDescriptionComponent;
