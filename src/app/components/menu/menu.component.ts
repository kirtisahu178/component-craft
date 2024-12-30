import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1 = `
    <div class="custom-menu-panel">
      <button mat-button [matMenuTriggerFor]="menu">Menu</button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item>Item 1</button>
          <button mat-menu-item>Item 2</button>
      </mat-menu>
    </div>
  `;
  CSSCodeToCopy1 = `
    .custom-menu-panel {
      overflow-y: hidden; 
    }
  `;
  TsCodeToCopy1 = `
    import { Component } from '@angular/core';
    import {MatIconModule} from '@angular/material/icon';
    import {MatMenuModule} from '@angular/material/menu';
    import {MatButtonModule} from '@angular/material/button';

    @Component({
      selector: 'app-menu',
      standalone: true,
      imports: [MatIconModule, MatMenuModule, MatButtonModule],
      templateUrl: './menu.component.html',
      styleUrl: './menu.component.scss'
    })
    export class MenuComponent {}
  `;

  HtmlCodeToCopy2 = `
    <div class="custom-menu-panel">
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>dialpad</mat-icon>
          <span>Redial</span>
        </button>
        <button mat-menu-item disabled>
          <mat-icon>voicemail</mat-icon>
          <span>Check voice mail</span>
        </button>
        <button mat-menu-item>
          <mat-icon>notifications_off</mat-icon>
          <span>Disable alerts</span>
        </button>
      </mat-menu>
    </div>
  `;
  CSSCodeToCopy2 = `
    .custom-menu-panel {
      overflow-y: hidden; 
    }
  `;
  TsCodeToCopy2 = `
    import { Component } from '@angular/core';
    import {MatIconModule} from '@angular/material/icon';
    import {MatMenuModule} from '@angular/material/menu';
    import {MatButtonModule} from '@angular/material/button';

    @Component({
      selector: 'app-menu',
      standalone: true,
      imports: [MatIconModule, MatMenuModule, MatButtonModule],
      templateUrl: './menu.component.html',
      styleUrl: './menu.component.scss'
    })
    export class MenuComponent {}
  `;

  HtmlCodeToCopy3 = `
    <div class="custom-menu-panel">
      <button mat-button [matMenuTriggerFor]="animals">Animal index</button>
      <mat-menu #animals="matMenu">
          <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
          <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
      </mat-menu>

      <mat-menu #vertebrates="matMenu">
          <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
          <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
          <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
          <button mat-menu-item>Birds</button>
          <button mat-menu-item>Mammals</button>
      </mat-menu>

      <mat-menu #invertebrates="matMenu">
          <button mat-menu-item>Insects</button>
          <button mat-menu-item>Molluscs</button>
          <button mat-menu-item>Crustaceans</button>
          <button mat-menu-item>Corals</button>
          <button mat-menu-item>Arachnids</button>
          <button mat-menu-item>Velvet worms</button>
          <button mat-menu-item>Horseshoe crabs</button>
      </mat-menu>

      <mat-menu #fish="matMenu">
          <button mat-menu-item>Baikal oilfish</button>
          <button mat-menu-item>Bala shark</button>
          <button mat-menu-item>Ballan wrasse</button>
          <button mat-menu-item>Bamboo shark</button>
          <button mat-menu-item>Banded killifish</button>
      </mat-menu>

      <mat-menu #amphibians="matMenu">
          <button mat-menu-item>Sonoran desert toad</button>
          <button mat-menu-item>Western toad</button>
          <button mat-menu-item>Arroyo toad</button>
          <button mat-menu-item>Yosemite toad</button>
      </mat-menu>

      <mat-menu #reptiles="matMenu">
          <button mat-menu-item>Banded Day Gecko</button>
          <button mat-menu-item>Banded Gila Monster</button>
          <button mat-menu-item>Black Tree Monitor</button>
          <button mat-menu-item>Blue Spiny Lizard</button>
          <button mat-menu-item disabled>Velociraptor</button>
      </mat-menu>
    </div>
  `;
  CSSCodeToCopy3 = `
    .custom-menu-panel {
      overflow-y: hidden; 
    }
  `;
  TsCodeToCopy3 = `
    import { Component } from '@angular/core';
    import {MatIconModule} from '@angular/material/icon';
    import {MatMenuModule} from '@angular/material/menu';
    import {MatButtonModule} from '@angular/material/button';

    @Component({
      selector: 'app-menu',
      standalone: true,
      imports: [MatIconModule, MatMenuModule, MatButtonModule],
      templateUrl: './menu.component.html',
      styleUrl: './menu.component.scss'
    })
    export class MenuComponent {}
  `;

  HtmlCodeToCopy4 = `
    <div class="custom-menu-panel">
      <button mat-button [matMenuTriggerFor]="aboveMenu">Above</button>
      <mat-menu #aboveMenu="matMenu" yPosition="above">
          <button mat-menu-item>Item 1</button>
          <button mat-menu-item>Item 2</button>
      </mat-menu>

      <button mat-button [matMenuTriggerFor]="belowMenu">Below</button>
      <mat-menu #belowMenu="matMenu" yPosition="below">
          <button mat-menu-item>Item 1</button>
          <button mat-menu-item>Item 2</button>
      </mat-menu>

      <button mat-button [matMenuTriggerFor]="beforeMenu">Before</button>
      <mat-menu #beforeMenu="matMenu" xPosition="before">
          <button mat-menu-item>Item 1</button>
          <button mat-menu-item>Item 2</button>
      </mat-menu>

      <button mat-button [matMenuTriggerFor]="afterMenu">After</button>
      <mat-menu #afterMenu="matMenu" xPosition="after">
          <button mat-menu-item>Item 1</button>
          <button mat-menu-item>Item 2</button>
      </mat-menu>
    </div>
  `;
  CSSCodeToCopy4 = `
    .custom-menu-panel {
      overflow-y: hidden; 
    }
  `;
  TsCodeToCopy4 = `
    import { Component } from '@angular/core';
    import {MatIconModule} from '@angular/material/icon';
    import {MatMenuModule} from '@angular/material/menu';
    import {MatButtonModule} from '@angular/material/button';

    @Component({
      selector: 'app-menu',
      standalone: true,
      imports: [MatIconModule, MatMenuModule, MatButtonModule],
      templateUrl: './menu.component.html',
      styleUrl: './menu.component.scss'
    })
    export class MenuComponent {}
  `;

  constructor() { }

}
