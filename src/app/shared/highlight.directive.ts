import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[zyfHighlight]'
})
export class HighlightDirective {

  private element: HTMLElement;

  @Input('myHighlight')
  private colour: string = 'yellow';

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() { this.highlight(this.colour); }

  @HostListener('mouseleave')
  onMouseLeave() { this.highlight(null); }

  private highlight(color: string) { this.element.style.backgroundColor = color; }
}

export default HighlightDirective;
