import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogService } from '../../Services/blog.service';
import LoginComponent from '../login/login.component';
import { Blog } from '../../Models/blog';


@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule, AngularEditorModule, HttpClientModule, ReactiveFormsModule, LoginComponent],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export default class CreateBlogComponent implements OnInit{

  blogService = inject(BlogService);
  activatedRouter = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  router = inject(Router);
  blogForm !: FormGroup;
  blogs : any[] = [];

  // blogTitle : string = 'My Blog 3';
  // blogCatagory : string = 'Blog 3';
  // blogContent : string = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '20rem',
    minHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    
  };


  ngOnInit(): void {
   
    this.blogForm = this.fb.group({
      blogTitle : ['', Validators.required],
      blogCatagory : ['', Validators.required],
      blogShortDesc : ['', Validators.required],
      blogContent : ['', Validators.required],
      userName : localStorage.getItem("userName")
    });

    this.fetchBlog();
    
  }

  submit() {
    const id = this.activatedRouter.snapshot.paramMap.get("_id")
      if(id != null){
        // console.log(this.blogForm.value);
         this.blogService.updateBlog(id, this.blogForm.value).subscribe({
          next : (res) =>{
            console.log("Res:", res);
            // this.blogForm.reset();
            this.router.navigate(['/myBlogs'])
          },
          error:(err) =>{
            console.log(err);
          }
         })
      }else{
       if (this.blogForm.valid) {

        this.blogService.createBlog(this.blogForm.value).subscribe({
          next : (res) =>{
            alert(res.message);
            this.blogForm.reset();
            this.router.navigate(['/myBlogs'])
          },
          error:(err) =>{
            console.log(err);
          }
        })
        
       } else {
          alert("Form Invalid");
       }
      }
    }
  


    fetchBlog(){
      this.activatedRouter.paramMap.subscribe(params =>{
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

            this.blogForm.patchValue({
              blogTitle : result.data.blogTitle,
              blogCatagory :  result.data.blogCatagory,
              blogShortDesc : result.data.blogShortDesc,
              blogContent : result.data.blogContent
            });
            
          })
        }
       })
    }

   

}
