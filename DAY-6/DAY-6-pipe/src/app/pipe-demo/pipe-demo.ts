import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-demo.html',
  styleUrls: ['./pipe-demo.css']
})
export class PipeDemo {
  // Assignment 1
  todayDate = new Date();
  productPrice = 45678.99;
  productName = 'wireless noise cancelling headphones pro max';
  discount = 0.1875;
  orderItems = ['Phone', 'Charger', 'Case', 'Screen Guard', 'Earbuds', 'Stand'];
  stockData = { name: 'TechCorp Ltd', price: 1234.5, change: 0.0312  };


  // Assignment 2
  blogPost = {
  title: '   angular pipes: a complete guide for modern developers   ',
  publishedAt: new Date('2024-11-15T08:30:00'),
  content: 'Angular pipes are one of the most useful features for transforming data in templates...',
  tags: ['angular', 'typescript', 'frontend', 'webdev', 'pipes']
};
}
