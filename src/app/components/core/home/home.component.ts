import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private blogService: BlogsService, private router: Router) { }
  carouselHeight:any = 480;
  cellsToShow:any = 4;

  latestBlogs:any[];
  isLoading:boolean=false;
  ngOnInit(): void {
    this.isLoading= true;
    this.latestBlogs= this.blogService.getBlogs().slice(-3).reverse();
    setTimeout(() => {
      this.isLoading= false;
    }, 0);
  }
  customOptionshome: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 0,
    autoplay:true,
    autoplayTimeout:2400,
    autoplayHoverPause:false,
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
        "items": 1,
      }
    },
  }

  onNavigate(blog:any) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    const selectedBlog = blog.title.toLowerCase().split(' ').join('-');
    this.router.navigate(['/blogs/', selectedBlog]);
  }
 
  onNavigateTo(route:any) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    this.router.navigate([route]);
  }
}
