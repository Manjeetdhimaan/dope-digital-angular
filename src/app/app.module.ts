import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HomeComponent } from './components/core/home/home.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WebDesignComponent } from './components/our-services/web-design/web-design.component';
import { SeoComponent } from './components/our-services/seo/seo.component';
import { SmmComponent } from './components/our-services/smm/smm.component';
import { YoutubeMarketingComponent } from './components/our-services/youtube-marketing/youtube-marketing.component';
import { PaidAdManagementComponent } from './components/our-services/paid-ad-management/paid-ad-management.component';
import { LogoGraphicDesignComponent } from './components/our-services/logo-graphic-design/logo-graphic-design.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsDescriptionComponent } from './components/blogs-description/blogs-description.component';
import { BlogsHeadlineComponent } from './components/blogs-headline/blogs-headline.component';
import { SpinnerComponent } from './components/UI-components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OurServicesComponent,
    WebDesignComponent,
    SeoComponent,
    SmmComponent,
    YoutubeMarketingComponent,
    PaidAdManagementComponent,
    LogoGraphicDesignComponent,
    AboutUsComponent,
    ClientsComponent,
    ContactComponent,
    BlogsDescriptionComponent,
    BlogsHeadlineComponent,
    SpinnerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
