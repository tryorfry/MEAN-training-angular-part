import { Directive, ElementRef, Input, HostListener} from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color;
  constructor(private element: ElementRef) { 
    console.log('i am placed on html on this element', this.element.nativeElement);
  }
  ngOnInit() {
    console.log('color received on directive init', this.color);
    this.element.nativeElement.style.color = this.color || 'green';
  }

  @HostListener('mouseover') mouseover() {
    this.element.nativeElement.style.border = '3px solid green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.element.nativeElement.style.border = null;
  }


}
