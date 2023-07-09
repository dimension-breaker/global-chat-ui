import { Component, ElementRef, ViewChild } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent {
  faGear = faGear
  isExpanded = false
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
