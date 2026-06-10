import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class ChildComponent implements OnChanges {

  @Input() counter = 0;

  previousValue = 0;
  currentValue = 0;

  flashClass = '';

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['counter']) {

      this.previousValue =
      changes['counter'].previousValue ?? 0;

      this.currentValue =
      changes['counter'].currentValue;

      if (this.currentValue > this.previousValue) {

        this.flashClass = 'increase';

      } else if (this.currentValue < this.previousValue) {

        this.flashClass = 'decrease';
      }

      setTimeout(() => {
        this.flashClass = '';
      }, 1000);
    }
  }
}