import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Models/blog';
import { CommonModule, JsonPipe } from '@angular/common';
import { TransformObjToArrayPipe } from '../../Pipes/transform-obj-to-array.pipe';

@Component({
  selector: 'app-view-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.css'
})
export default class ViewBlogComponent implements OnInit {

  router = inject(ActivatedRoute);
  blogService = inject(BlogService);
  blogs : any;

  ngOnInit(): void {
   this.router.paramMap.subscribe(params =>{
    const id = params.get('_id');
    if(id){
      this.blogService.getBlogById(id).subscribe((result) =>{
        // this.blogs = result.data;
        const arrayResult = Object.values(result);
        console.log("Type: ",typeof(arrayResult));
        // this.blogs = arrayResult[3]
        for(var i= arrayResult.length-1; i>=0; i--){
          
          if(typeof arrayResult[i] !== 'object' || arrayResult[i] === null){
            arrayResult.splice(i, 1);
          }else{
           this.blogs = arrayResult;
          
          }

        }
        console.log(arrayResult); 
      })
    }
   })
  }

  

}
