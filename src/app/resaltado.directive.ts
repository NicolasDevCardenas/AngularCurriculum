import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
  }
  
  ngOnInit(){
    var element = this.el.nativeElement;
    element.style.background = "white";    
    element.style.color="black";
    element.innerText = element.innerText.toUpperCase();
   }
}
