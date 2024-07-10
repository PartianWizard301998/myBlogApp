import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';
import HomeComponent from './Components/home/home.component';
import LoginComponent from './Components/login/login.component';
import RegisterComponent from './Components/register/register.component';
import DashboardComponent from './Components/dashboard/dashboard.component';
import CreateBlogComponent from './Components/create-blog/create-blog.component';
import MyBlogsComponent from './Components/my-blogs/my-blogs.component';
import ViewBlogComponent from './Components/view-blog/view-blog.component';

export const routes: Routes = [
    // {path:'', loadComponent: () => import('./Components/home/home.component')},
    // {path:'login', loadComponent: () => import('./Components/login/login.component')},
    // {path:'register', loadComponent: () => import('./Components/register/register.component')},
    // {path:'home', loadComponent: () => import('./Components/home/home.component')},
    // {path:'dashboard',canActivate:[authGuard], loadComponent: () => import('./Components/dashboard/dashboard.component')},
    // {path:'createBlog',canActivate:[authGuard], loadComponent: () => import('./Components/create-blog/create-blog.component')},
    // {path:'updateBlog/:_id',canActivate:[authGuard], loadComponent: () => import('./Components/create-blog/create-blog.component')},
    // {path:'myBlogs',canActivate:[authGuard], loadComponent: () => import('./Components/my-blogs/my-blogs.component')},
    // {path:'viewBlog/:_id', loadComponent:() => import('./Components/view-blog/view-blog.component')}

    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"home", component:HomeComponent},
    {path:"dashboard",canActivate:[authGuard], component:DashboardComponent},
    {path:"createBlog",canActivate:[authGuard], component:CreateBlogComponent},
    {path:"updateBlog/:_id",canActivate:[authGuard], component:CreateBlogComponent},
    {path:"myBlogs",canActivate:[authGuard], component:MyBlogsComponent},
    {path:"viewBlog/:_id", component:ViewBlogComponent}
    
];
