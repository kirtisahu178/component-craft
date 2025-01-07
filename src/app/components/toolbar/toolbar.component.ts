import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1 = `
    
  `;

  CSSCodeToCopy1 = `
    
  `;

  TsCodeToCopy1 = `
    
  `;

  HtmlCodeToCopy2 = `
    
  `;

  CSSCodeToCopy2 = `
    
  `;

  TsCodeToCopy2 = `
    
  `;

  HtmlCodeToCopy3 = `
    
  `;

  CSSCodeToCopy3 = `
    
  `;

  TsCodeToCopy3 = `
    
  `;

  HtmlCodeToCopy4 = `
    
  `;

  CSSCodeToCopy4 = `
    
  `;

  TsCodeToCopy4 = `
    
  `;

  HtmlCodeToCopy5 = `
    
  `;

  CSSCodeToCopy5 = `
    
  `;

  TsCodeToCopy5 = `
    
  `;

  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        // console.log('Is small screen:', result.matches);
        this.isSmallScreen = result.matches;
      });
  }
}
