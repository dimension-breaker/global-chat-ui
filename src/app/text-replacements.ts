import { Component } from '@angular/core'
import { faLongArrowAltRight, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({ selector: 'text-replacements', template: `
<div class="flex flex-col gap-2 p-2">
  <div class="flex flex-rol items-center justify-between">
    <strong>Text Replacements</strong>
    <fa-icon class="block cursor-pointer hover:bg-gray-200 p-2 w-fit" [icon]="faPlus" [ngStyle]="{ lineHeight: 0 }"/>
  </div>
  <div class="overflow-auto" [ngStyle]="{ flex: '1 1 auto' }">
    <div class="cursor-pointer hover:bg-gray-200 p-2" *ngFor="let textReplacement of textReplacements | keyvalue" tabindex="0">
      {{textReplacement.key}} -> {{textReplacement.value}}
    </div>
  </div>
</div>
` })
export class TextReplacementsComponent {
  faLongArrowAltRight = faLongArrowAltRight
  faPlus = faPlus
  textReplacements = new Map([
    ['ss', 'spam'],
    ['the-power-of-friendship', 'the power of feelings'],
    ['yes', 'no']
  ])
}
