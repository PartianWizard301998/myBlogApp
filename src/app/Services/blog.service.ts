import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Models/blog';
import { apiUrls } from '../Validators/api_URL.js';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  http = inject(HttpClient);
  
  getAllBlogs() : Observable<any> {
    return this.http.get<any>(apiUrls.blogServiceApi);
  }

  getBlogByUsername(userName : string) : Observable<any>{
    return this.http.get<any>(`${apiUrls.blogServiceApi}myBlogs/`+userName);
  }

  createBlog(blog : any) : Observable<any>{
    return this.http.post<any>(`${apiUrls.blogServiceApi}createBlog`, blog);
  }

  deleteBlog(id : string) : Observable<void>{
    return this.http.delete<void>(`${apiUrls.blogServiceApi}deleteBlog/`+id);
  }

  // getBlogById(id : string) : Observable<any>{
  //   return this.http.get<any>(`${apiUrls.blogServiceApi}`+id);
  // }

  getBlogById(id : string) : Observable<any>{
    return this.http.get<any>(`${apiUrls.blogServiceApi}`+id);
  }

  updateBlog(id : string, updatedBlog : any) :  Observable<any>{
    return this.http.patch<any>(`${apiUrls.blogServiceApi}updateBlog/`+id, updatedBlog);
  }

  
}
