import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsHeadlineComponent } from './components/blogs-headline/blogs-headline.component';
import { BlogsDescriptionComponent } from './components/blogs-description/blogs-description.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/core/home/home.component';
import { LogoGraphicDesignComponent } from './components/our-services/logo-graphic-design/logo-graphic-design.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PaidAdManagementComponent } from './components/our-services/paid-ad-management/paid-ad-management.component';
import { SeoComponent } from './components/our-services/seo/seo.component';
import { SmmComponent } from './components/our-services/smm/smm.component';
import { WebDesignComponent } from './components/our-services/web-design/web-design.component';
import { YoutubeMarketingComponent } from './components/our-services/youtube-marketing/youtube-marketing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: {title: 'Dope Digital'}
  },
  {
    path: 'services', component: OurServicesComponent, data: {title: 'SERVICES - Dope Digital'}
  },
  {
    path: 'logo-design', component: LogoGraphicDesignComponent, data: {title: 'LOGO AND GRAPHIC - Dope Digital'}
  },
  {
    path: 'web-design', component: WebDesignComponent, data: {title: 'WEB DESIGN - Dope Digital'}
  },
  {
    path: 'seo', component: SeoComponent, data: {title: 'SEO - Dope Digital'}
  },
  {
    path: 'social-media-management', component: SmmComponent, data: {title: 'SOCIAL MEDIA MARKETING - Dope Digital'}
  },
  {
    path: 'youtube-marketing', component: YoutubeMarketingComponent, data: {title: 'YOUTUBE MARKETING - Dope Digital'}
  },
  {
    path: 'paid-Ad-management', component: PaidAdManagementComponent, data: {title: 'PAID AD MANAGEMENT - Dope Digital'}
  },
  {
    path: 'about', component: AboutUsComponent, data: {title: 'ABOUT - Dope Digital'}
  },
  {
    path: 'clients', component: ClientsComponent, data: {title: 'CLIENTS - Dope Digital'}
  },
  {
    path: 'contact', component: ContactComponent, data: {title: 'CONTACT - Dope Digital'}
  },
  {
    path: 'blogs', component: BlogsHeadlineComponent,data: {title: 'BLOGS - Dope Digital'}
  },
  {
    path: 'blogs/:blog', component: BlogsDescriptionComponent, data: {title: 'BLOGS - Dope Digital'}
  },
  {
    path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found - Dope Digital'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
