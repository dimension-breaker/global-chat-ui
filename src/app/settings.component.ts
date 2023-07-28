import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faGear, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({ selector: 'settings', templateUrl: './settings.component.html' })
export class SettingsComponent {
  faGear = faGear
  faLongArrowAltRight = faLongArrowAltRight
  @ViewChild('settings') settings!: ElementRef
  showDialog = false

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.settings.nativeElement.contains(event.target)) {
      this.showDialog = false
    }
  }
}
