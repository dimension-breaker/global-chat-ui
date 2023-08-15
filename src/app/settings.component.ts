import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faGear, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({ selector: 'settings', template: `
<div class="p-2" (click)="$event.stopPropagation()">
  <fa-icon class="block hover:bg-gray-200 p-2 w-fit" (click)="showDialog = !showDialog" [icon]="faGear" [ngStyle]="{ lineHeight: 0 }"/>
</div>
<dialog class="border-2 h-1/2 inset-2/4 p-0 w-1/2" (click)="$event.stopPropagation()" [ngStyle]="{ translate: '-50%' }" [open]="showDialog" #settings>
  <div class="flex flex-row h-full">
    <div [ngStyle]="{ flex: '0 1 25%' }">
      <div class="bg-gray-100 hover:bg-gray-200 p-2">Text Replacements</div>
    </div>
    <div class="border-r-2"></div>
    <div class="p-2" [ngStyle]="{ flex: '0 1 75%' }">
      <input class="border-2 focus:outline-none h-12 p-2">
      <fa-icon class="p-2 w-fit" [icon]="faLongArrowAltRight" [ngStyle]="{ lineHeight: 0 }"/>
      <input class="border-2 focus:outline-none h-12 p-2">
    </div>
  </div>
</dialog>
` })
export class SettingsComponent {
  faGear = faGear
  faLongArrowAltRight = faLongArrowAltRight
  @ViewChild('settings') settings!: ElementRef
  showDialog = false

  @HostListener('document:click', ['$event'])
  documentClick(pointerEvent: PointerEvent) {
    if(!this.settings.nativeElement.contains(pointerEvent.target)) {
      this.showDialog = false
    }
  }
}
