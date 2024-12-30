import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1: any;
  CSSCodeToCopy1: any;
  TsCodeToCopy1: any;

  constructor() { }

}
