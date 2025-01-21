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
  <button mat-button>
    <mat-icon>code</mat-icon> Compile Me!
  </button>
  <button mat-button disabled>
    <mat-icon>bug_report</mat-icon> Out of Lifecycle!
  </button>
  <a mat-button href="https://www.angular.io/" target="_blank">
    <mat-icon>launch</mat-icon> To the Docs!
  </a>
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


  HtmlCodeToCopy2 = `
  <button mat-raised-button>
    <mat-icon>upgrade</mat-icon> Raise an Event!
  </button>&nbsp;
  <button mat-raised-button disabled>
    <mat-icon>remove_circle_outline</mat-icon> Detached View
  </button>&nbsp;
  <a mat-raised-button href="https://rxjs.dev/" target="_blank">
    <mat-icon>timeline</mat-icon> RxJS Adventure
  </a>
  `;

  TsCodeToCopy2 = `
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

  CSSCodeToCopy2: any;

  HtmlCodeToCopy3 = `
  <button mat-stroked-button>
    <mat-icon>extension</mat-icon> No Scope Here!
  </button>&nbsp;
  <button mat-stroked-button disabled>
    <mat-icon>error_outline</mat-icon> Template Broken
  </button>&nbsp;
  <a mat-stroked-button href="https://angular.io/cli" target="_blank">
    <mat-icon>build</mat-icon> Run ng new
  </a>
    `;

  TsCodeToCopy3 = `
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

  CSSCodeToCopy3: any;

  HtmlCodeToCopy4 = `
  <button mat-flat-button>
    <mat-icon>horizontal_split</mat-icon> Flat Out Awesome
  </button>&nbsp;
  <button mat-flat-button disabled>
    <mat-icon>pan_tool</mat-icon> Flattened Directive
  </button>&nbsp;
  <a mat-flat-button href="https://angular.io/errors" target="_blank">
    <mat-icon>search</mat-icon> Find My Error
  </a>
  `;

  TsCodeToCopy4 = `
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

  CSSCodeToCopy4: any;

  HtmlCodeToCopy5 = `
  <button mat-icon-button aria-label="Menu icon for Angular navigation">
    <mat-icon>dynamic_feed</mat-icon>
  </button>&nbsp;
  <button mat-icon-button disabled aria-label="Visibility off for debugging">
    <mat-icon>visibility_off</mat-icon>
  </button>&nbsp;
  <button mat-icon-button aria-label="Icon button for compilation">
    <mat-icon>code</mat-icon>
  </button>
  `;

  TsCodeToCopy5 = `
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

  CSSCodeToCopy5: any;

  HtmlCodeToCopy6 = `
  <button mat-fab aria-label="FAB button for ngDestroy lifecycle">
    <mat-icon>delete</mat-icon> 
  </button>&nbsp;
  <button mat-fab disabled aria-label="FAB button for broken dependencies">
    <mat-icon>link</mat-icon>
  </button>&nbsp;
  <button mat-fab aria-label="FAB button for Angular modules">
    <mat-icon>build</mat-icon>
  </button>
    `;

  TsCodeToCopy6 = `
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

  CSSCodeToCopy6: any;

  HtmlCodeToCopy7 = `
  <button mat-mini-fab aria-label="Mini FAB for Angular routing">
    <mat-icon>router</mat-icon>
  </button>&nbsp;
  <button mat-mini-fab aria-label="Mini FAB for Angular templates">
    <mat-icon>view_compact</mat-icon>
  </button>&nbsp;
  <button mat-mini-fab aria-label="Mini FAB for Angular data binding">
    <mat-icon>sync</mat-icon>
  </button>
    `;

  TsCodeToCopy7 = `
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

  CSSCodeToCopy7: any;

  HtmlCodeToCopy8 = `
  <button mat-fab extended>
    <mat-icon>favorite</mat-icon> Love Angular
  </button>&nbsp;
  <button mat-fab extended disabled>
    <mat-icon>hourglass_empty</mat-icon> Waiting for Change
  </button>&nbsp;
  <a mat-fab extended routerLink=".">
    <mat-icon>router</mat-icon> Extend My Route
  </a>
    `;

  TsCodeToCopy8 = `
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

  CSSCodeToCopy8: any;

  constructor() { }

  ngOnInit(): void {
  
  }
}
