import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-logger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-logger.html',
  styleUrl: './lifecycle-logger.css'
})
export class LifecycleLoggerComponent
implements
OnInit,
OnChanges,
AfterContentInit,
AfterViewInit,
OnDestroy {

  @Input() data!: string;

  logs: string[] = [];

  private addLog(hook: string) {

    const time = new Date().toLocaleTimeString();

    this.logs.unshift(
      `${hook} - ${time}`
    );
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.addLog('ngOnChanges');

    console.log(
      'ngOnChanges',
      changes
    );
  }

  ngOnInit(): void {

    this.addLog('ngOnInit');

    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {

    this.addLog('ngAfterContentInit');

    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {

    this.addLog('ngAfterViewInit');

    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {

    console.log('ngOnDestroy');
  }
}