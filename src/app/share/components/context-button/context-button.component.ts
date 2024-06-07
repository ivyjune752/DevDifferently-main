import { NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-context-button',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './context-button.component.html',
  styleUrl: './context-button.component.sass'
})
export class ContextButtonComponent {
  @Input()
  label: string = '';

  @Input()
  icon: string = '';

  public contextStyle: any = {
    position: 'absolute',
    top: 0,
    left: 0,
    'z-index': 99
  };

  public isDisplayContextMenu: boolean = false;

  constructor(private eRef: ElementRef) {
  }

  displayContextMenu(event: any): void {
    if (!event) return;

    const leftAddition = !this.label ? 0 : this.label.length * 5;
    this.contextStyle = {
      position: 'absolute',
      left: (event.target.offsetLeft - 115 + leftAddition) + 'px',
      top: (event.target.offsetTop + 30) + 'px',
      'z-index': 99,
    }
    this.isDisplayContextMenu = true;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDisplayContextMenu = false;
    }
  }
}
