import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FeaturedContentComponent } from '../featured-content/featured-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, FeaturedContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {

 
  ngOnInit(): void {
    
  }

}
