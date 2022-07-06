"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_us_component_1 = require("./components/about-us/about-us.component");
var blogs_headline_component_1 = require("./components/blogs-headline/blogs-headline.component");
var blogs_description_component_1 = require("./components/blogs-description/blogs-description.component");
var clients_component_1 = require("./components/clients/clients.component");
var contact_component_1 = require("./components/contact/contact.component");
var home_component_1 = require("./components/core/home/home.component");
var logo_graphic_design_component_1 = require("./components/our-services/logo-graphic-design/logo-graphic-design.component");
var our_services_component_1 = require("./components/our-services/our-services.component");
var paid_ad_management_component_1 = require("./components/our-services/paid-ad-management/paid-ad-management.component");
var seo_component_1 = require("./components/our-services/seo/seo.component");
var smm_component_1 = require("./components/our-services/smm/smm.component");
var web_design_component_1 = require("./components/our-services/web-design/web-design.component");
var youtube_marketing_component_1 = require("./components/our-services/youtube-marketing/youtube-marketing.component");
var page_not_found_component_1 = require("./components/page-not-found/page-not-found.component");
var routes = [
    {
        path: '', component: home_component_1.HomeComponent, data: { title: 'Dope Digital' }
    },
    {
        path: 'services', component: our_services_component_1.OurServicesComponent, data: { title: 'SERVICES - Dope Digital' }
    },
    {
        path: 'logo-design', component: logo_graphic_design_component_1.LogoGraphicDesignComponent, data: { title: 'LOGO AND GRAPHIC - Dope Digital' }
    },
    {
        path: 'web-design', component: web_design_component_1.WebDesignComponent, data: { title: 'WEB DESIGN - Dope Digital' }
    },
    {
        path: 'seo', component: seo_component_1.SeoComponent, data: { title: 'SEO - Dope Digital' }
    },
    {
        path: 'social-media-management', component: smm_component_1.SmmComponent, data: { title: 'SOCIAL MEDIA MARKETING - Dope Digital' }
    },
    {
        path: 'youtube-marketing', component: youtube_marketing_component_1.YoutubeMarketingComponent, data: { title: 'YOUTUBE MARKETING - Dope Digital' }
    },
    {
        path: 'paid-Ad-management', component: paid_ad_management_component_1.PaidAdManagementComponent, data: { title: 'PAID AD MANAGEMENT - Dope Digital' }
    },
    {
        path: 'about', component: about_us_component_1.AboutUsComponent, data: { title: 'ABOUT - Dope Digital' }
    },
    {
        path: 'clients', component: clients_component_1.ClientsComponent, data: { title: 'CLIENTS - Dope Digital' }
    },
    {
        path: 'contact', component: contact_component_1.ContactComponent, data: { title: 'CONTACT - Dope Digital' }
    },
    {
        path: 'blogs', component: blogs_headline_component_1.BlogsHeadlineComponent, data: { title: 'BLOGS - Dope Digital' }
    },
    {
        path: 'blogs/:blog', component: blogs_description_component_1.BlogsDescriptionComponent, data: { title: 'BLOGS - Dope Digital' }
    },
    {
        path: '**', component: page_not_found_component_1.PageNotFoundComponent, data: { title: 'Page Not Found - Dope Digital' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    initialNavigation: 'enabledBlocking'
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
