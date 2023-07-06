import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent {
  isExpanded = false;
  messages: string[] = []
  @ViewChild('scroll') scroll!: ElementRef

  ngAfterViewChecked() {
    if (!this.scroll) return
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
  }

  ngOnInit() {
    if (!this.scroll) return
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
  }
}

// add variables for space, border, color, and font
// add sidebar: 0) user list 1) settings
