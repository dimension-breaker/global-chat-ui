import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent {
  @ViewChild('scroll') scroll!: ElementRef
  messages: string[] = []

  ngAfterViewChecked() {
    if (!this.scroll) return
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
  }

  ngOnInit() {
    if (!this.scroll) return
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
  }
}
