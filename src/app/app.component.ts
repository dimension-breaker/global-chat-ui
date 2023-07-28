import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent {
  isExpanded = false
  messages: string[] = []
  @ViewChild('scroll') scroll!: ElementRef

  ngAfterViewChecked() {
    if (!this.scroll) return
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
  }
}
