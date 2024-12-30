import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.scss'
})
export class ProgressSpinnerComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1: any;
  CSSCodeToCopy1: any;
  TsCodeToCopy1: any;

  constructor() { }

}
