import { Component, Input, OnInit, inject, input } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog';
import { CommonModule } from '@angular/common';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { Console } from 'node:console';
import { FeaturedContentComponent } from '../featured-content/featured-content.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AngularEditorModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit{

   blogs : Blog[] = [];
   
  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    height: '30rem',
    minHeight: '5rem',
    translate: 'yes',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  };
  
  blogService = inject(BlogService);

   //blogs : Blog[] = [];
  router = inject(Router);
  ngOnInit(): void {
   this.fetchBlogs();
  }

  deleteBlog(id : string){
      this.blogService.deleteBlog(id).subscribe((result) =>{
        alert("Blog Deleted");
        this.fetchBlogs();

      })
  }

  fetchBlogs() : void {
    this.blogService.getAllBlogs().subscribe((result) =>{
      this.blogs = result.data;
      console.log(result);
    });
  }

  viewBlog(id : string) {
      this.router.navigate(['/viewBlog/'+id]);
    }



}
