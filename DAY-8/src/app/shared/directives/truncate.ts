import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector:'[appTruncate]',
  standalone:false
})
export class Truncate implements AfterViewInit{

  @Input()
  maxChars=20;

  constructor(private el:ElementRef){}

  ngAfterViewInit(){

    const text=this.el.nativeElement.innerText;

    if(text.length>this.maxChars){

      this.el.nativeElement.innerText=
      text.substring(0,this.maxChars)+'...';

    }

  }
}