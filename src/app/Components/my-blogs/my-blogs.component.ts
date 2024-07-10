import { Component, OnInit, inject } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-blogs.component.html',
  styleUrl: './my-blogs.component.css'
})
export default class MyBlogsComponent implements OnInit {

  blogService = inject(BlogService);

  
  blogs : Blog[] = [];
  router = inject(Router);
  userName : any = localStorage.getItem("userName") ;
  

  constructor(){
    var userName = localStorage.getItem('userName');
    console.log(userName);
    
  }

  ngOnInit(): void {
    this.getMyBlogs(this.userName);
  }

  deleteBlog(id : string){
    this.blogService.deleteBlog(id).subscribe((result) =>{
      alert("Blog Deleted");
    });
}

 
  getMyBlogs(userName : string){
    this.blogService.getBlogByUsername(userName).subscribe((result) =>{
      this.blogs = result.data;
      console.log(result.data);

      // if(this.blogs.length == 0){
      //   alert("You have no blogs yet, Please add the Blog to see your Blogs.")
      // }
    })
    }

  viewBlog(id : string) {
      this.router.navigate(['/viewBlog/'+id]);
    }


    editBlog(id : string){
      this.router.navigate(['/updateBlog/'+id]);
    }
    
  }
  
