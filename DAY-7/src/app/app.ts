import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleLoggerComponent } from './lifecycle-logger/lifecycle-logger';
import { ParentComponent } from './parent/parent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LifecycleLoggerComponent,
    ParentComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  message = 'Angular';

  showComponent = true;

  changeInput() {
    this.message =
    'Updated at ' +
    new Date().toLocaleTimeString();
  }

  toggleComponent() {
    this.showComponent =
    !this.showComponent;
  }
}