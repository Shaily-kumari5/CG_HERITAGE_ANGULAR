import { Component } from '@angular/core';
import { ChildComponent } from '../child/child';

@Component({
  selector: 'app-parent-counter',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class ParentComponent {

  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}