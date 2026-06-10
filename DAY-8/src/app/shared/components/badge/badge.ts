import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone:false,
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class Badge {

  @Input()
  label='';

  @Input()
  color='green';

}