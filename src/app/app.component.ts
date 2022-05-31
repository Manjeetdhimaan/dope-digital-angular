import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dope-digital-angular';
   constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) { }

   ngOnInit() {
    var activatedUrl:any;
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
        
          
          //getting name from url 
          let routerUrl_split = this.router.url.slice(1).split("-")
          let result = []
          for (let i = 0; i < routerUrl_split.length; i++) {
            result.push(routerUrl_split[i].slice(0, 1).toUpperCase() + routerUrl_split[i].slice(1))
          }

          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data['title']) {
          
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
        
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }
   }

  //  setTitle(newTitle: string) {
  //   this.titleService.setTitle(newTitle);
  // }
