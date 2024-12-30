import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-code-tab-design',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './code-tab-design.component.html',
  styleUrl: './code-tab-design.component.scss'
})
export class CodeTabDesignComponent {

  isCopied: boolean = false;
  @Input() HtmlCodeToCopy: string = '';
  @Input() TsCodeToCopy: string = '';
  @Input() CSSCodeToCopy: string = '';

  constructor(private clipboard: Clipboard) { }

  copyCodeSection(code_type: any) {
    if (code_type == 'html') {
      this.clipboard.copy(this.HtmlCodeToCopy.trim());
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);

    } else if (code_type == 'ts') {
      this.clipboard.copy(this.TsCodeToCopy.trim());
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);

    } else if (code_type == 'css') {
      this.clipboard.copy(this.CSSCodeToCopy.trim());
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);

    } else {

    }

  }

}
