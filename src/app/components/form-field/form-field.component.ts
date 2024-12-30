import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import {provideNativeDateAdapter} from '@angular/material/core';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {

  isCopied: boolean = false;
  HtmlCodeToCopy1: any;
  TsCodeToCopy1: any;
  CSSCodeToCopy1: any;
  HtmlCodeToCopy2: any;
  TsCodeToCopy2: any;
  CSSCodeToCopy2: any;
  HtmlCodeToCopy3: any;
  TsCodeToCopy3: any;
  CSSCodeToCopy3: any;

  constructor(){}

  

}
