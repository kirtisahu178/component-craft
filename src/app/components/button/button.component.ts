import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MaterialModule, CommonModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  currentTheme: any;

  isCopied: boolean = false;

  HtmlCodeToCopy1 = `
      <div>
        <button mat-button>Basic</button>
        <button mat-raised-button>Raised</button>
        <button mat-stroked-button>Stroked</button>
        <button mat-flat-button>Flat</button>
        <button mat-button disabled>Disabled</button>
      </div>
      <div>
          <button mat-icon-button>
            <mat-icon>home</mat-icon>
          </button>
          <button mat-fab>
            <mat-icon>delete</mat-icon>
          </button>
          <button mat-mini-fab>
            <mat-icon>menu</mat-icon>
          </button>
      </div>
      <div>
          <button mat-fab extended>
            <mat-icon>favorite</mat-icon>
            Basic
          </button>
          <button mat-fab extended disabled>
            <mat-icon>favorite</mat-icon>
            Disabled
          </button>
          <a mat-fab extended routerLink=".">
            <mat-icon>favorite</mat-icon>
            Link
          </a>
      </div>
    `;

  TsCodeToCopy1 = `
        import { Component } from '@angular/core';
        import { MatButtonModule } from '@angular/material/button';

        @Component({
          selector: 'app-button',
          standalone: true,
          imports: [MatButtonModule],
          templateUrl: './button.component.html',
          styleUrls: ['./button.component.scss'
        })
        export class ButtonComponent { }
      `;

  CSSCodeToCopy1: any;

  constructor() { }

  ngOnInit(): void {
  
  }
}
