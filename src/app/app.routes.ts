import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {path:'', loadComponent: () => import('./Components/home/home.component')},
    {path:'login', loadComponent: () => import('./Components/login/login.component')},
    {path:'register', loadComponent: () => import('./Components/register/register.component')},
    {path:'home', loadComponent: () => import('./Components/home/home.component')},
    {path:'dashboard',canActivate:[authGuard], loadComponent: () => import('./Components/dashboard/dashboard.component')},
    {path:'createBlog',canActivate:[authGuard], loadComponent: () => import('./Components/create-blog/create-blog.component')},
    {path:'updateBlog/:_id',canActivate:[authGuard], loadComponent: () => import('./Components/create-blog/create-blog.component')},
    {path:'myBlogs',canActivate:[authGuard], loadComponent: () => import('./Components/my-blogs/my-blogs.component')},
    {path:'viewBlog/:_id', loadComponent:() => import('./Components/view-blog/view-blog.component')}
    
];
