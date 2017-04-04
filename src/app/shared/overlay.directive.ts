import { HostListener, ElementRef, Directive, Component } from '@angular/core';

export interface IOverlayDirective {
  close(): void;
  open(el: ElementRef, text: string): void;
  attach(target: HTMLElement): void;
  detach(): void;
}

@Directive({
  selector: '[zyfOverlay]'
})
export abstract class AbstractOverlayDirective implements IOverlayDirective {
  abstract close(): void
  abstract open(el: ElementRef, text: string): void
  abstract attach(target: HTMLElement): void
  abstract detach(): void
}

export class OverlayDirective extends AbstractOverlayDirective implements IOverlayDirective {

  private el: HTMLElement;

  constructor() {
    super();
    let el = document.createElement('div');
    el.className = 'tooltip';
    this.el = el;
  }

  close(): void { this.el.hidden = true; }

  open(el: ElementRef, text: string): void {
    // console.log(`Overlay open : ${text}.`);
    this.el.innerHTML = text;
    this.el.hidden = false;
    let rect = el.nativeElement.getBoundingClientRect();
    this.el.style.left = rect.left + 'px';
    this.el.style.top = rect.top + 'px';
  }

  attach(target: HTMLElement): void { target.appendChild(this.el); }

  detach(): void { this.el.parentNode.removeChild(this.el); }
}

export class MockOverlayDirective extends AbstractOverlayDirective implements IOverlayDirective {
  constructor() { super(); }
  close() { }
  open(el: ElementRef, text: string) { }
  attach(target: HTMLElement) { }
  detach() { }
}

export default OverlayDirective;
