import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1 = `
    <mat-toolbar>
      <button mat-icon-button>
        <mat-icon matTooltip="A little door to endless possibilities!">menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="example-spacer"></span>
      <button mat-icon-button>
        <mat-icon matTooltip="If you love yourself, the universe reflects that love back to you. ">favorite</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon matTooltip="Share your knowledge with others">share</mat-icon>
      </button>
    </mat-toolbar>
  `;

  CSSCodeToCopy1 = `
    .example-spacer {
      flex: 1 1 auto;
    }
  `;

  TsCodeToCopy1 = `
    import { Component } from '@angular/core';
    import { MatIconModule } from '@angular/material/icon';
    import { MatButtonModule } from '@angular/material/button';
    import { MatToolbarModule } from '@angular/material/toolbar';

    @Component({
      selector: 'app-toolbar',
      standalone: true,
      imports: [MatToolbarModule, MatButtonModule, MatIconModule],
      templateUrl: './toolbar.component.html',
      styleUrl: './toolbar.component.scss'
    })
    export class ToolbarComponent {}
  `;

  constructor() { }

}
