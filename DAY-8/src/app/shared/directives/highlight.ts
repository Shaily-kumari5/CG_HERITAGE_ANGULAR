import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:false
})
export class Highlight {

  @Input()
  color='yellow';

  constructor(private el:ElementRef){}

  @HostListener('mouseenter')
  onEnter(){
    this.el.nativeElement.style.backgroundColor=this.color;
  }

  @HostListener('mouseleave')
  onLeave(){
    this.el.nativeElement.style.backgroundColor='';
  }

}