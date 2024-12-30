import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.scss'
})
export class BottomSheetComponent {

  isCopied: boolean = false;
  HtmlCodeToCopy1: any;
  CSSCodeToCopy1: any;
  TsCodeToCopy1: any;

  constructor() { }

  
}
