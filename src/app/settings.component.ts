import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'
import { faGear, faLongArrowAltRight, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({ selector: 'settings', template: `
<div class="p-2" (click)="$event.stopPropagation(); showDialog = false">
  <fa-icon class="block cursor-pointer hover:bg-gray-200 p-2 w-fit" (click)="showDialog = !showDialog; $event.stopPropagation()" [icon]="faGear" (keydown.enter)="showDialog = !showDialog; $event.stopPropagation()" (keydown.esc)="showDialog = false" [ngStyle]="{ lineHeight: 0 }" tabindex="0" />
</div>
<dialog class="border-2 h-1/2 inset-2/4 p-0 w-1/2" (click)="$event.stopPropagation()" (keydown.enter)="$event.stopPropagation()" (keydown.esc)="showDialog = false" [ngStyle]="{ translate: '-50%' }" [open]="showDialog" #settings>
  <div class="flex flex-row h-full">
    <div [ngStyle]="{ flex: '0 1 25%' }">
      <div class="bg-gray-100 cursor-pointer hover:bg-gray-200 p-2" tabindex="0">Text Replacements</div>
    </div>
    <div class="border-r-2"></div>
    <div class="flex flex-col gap-2 p-2" [ngStyle]="{ flex: '0 1 75%' }">
      <div class="flex flex-rol items-center justify-between">
        <strong>Text Replacements</strong>
        <fa-icon class="block cursor-pointer hover:bg-gray-200 p-2 w-fit" [icon]="faPlus" [ngStyle]="{ lineHeight: 0 }"/>
      </div>
      <div class="overflow-auto" [ngStyle]="{ flex: '1 1 auto' }">
        <div class="cursor-pointer hover:bg-gray-200 p-2" *ngFor="let textReplacement of [{ replacement: 'my bad', text: 'mb' }, { replacement: 'shut the firetruck up', text: 'hi' }, { replacement: 'no', text: 'yes' }]" tabindex="0">
          {{textReplacement.text}} -> {{textReplacement.replacement}}
        </div>
      </div>
    </div>
  </div>
</dialog>
` })
export class SettingsComponent {
  faGear = faGear
  faLongArrowAltRight = faLongArrowAltRight
  faPlus = faPlus
  @ViewChild('settings') settings!: ElementRef
  showDialog = false

  @HostListener('document:click', ['$event'])
  documentClick(pointerEvent: PointerEvent) {
    if(!this.settings.nativeElement.contains(pointerEvent.target)) {
      this.showDialog = false
    }
  }
}
