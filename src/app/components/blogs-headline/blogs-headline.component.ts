import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs-headline',
  templateUrl: './blogs-headline.component.html',
  styleUrls: ['./blogs-headline.component.css']
})
export class BlogsHeadlineComponent implements OnInit {

  constructor(private router: Router, private blogService: BlogsService) { }

  latestBlogs:any[];
  ngOnInit(): void {
    this.latestBlogs= this.blogService.getBlogs().slice(-3).reverse();
  }

  onNavigate(blog:any) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    const selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
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
