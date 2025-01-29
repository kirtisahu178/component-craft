import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1: any;
  CSSCodeToCopy1: any;
  TsCodeToCopy1: any;

  HtmlCodeToCopy2: any;
  CSSCodeToCopy2: any;
  TsCodeToCopy2: any;

  HtmlCodeToCopy3: any;
  CSSCodeToCopy3: any;
  TsCodeToCopy3: any;

  HtmlCodeToCopy4: any;
  CSSCodeToCopy4: any;
  TsCodeToCopy4: any;

  HtmlCodeToCopy5: any;
  CSSCodeToCopy5: any;
  TsCodeToCopy5: any;

  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  constructor() { }

}
