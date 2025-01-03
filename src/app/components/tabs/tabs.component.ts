import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  HtmlCodeToCopy1 = `
  <mat-tab-group>
    <mat-tab label="Commitment Issues">
      <p>"I commit, but I don’t push my feelings."</p>
    </mat-tab>
    <mat-tab label="Code Confessions">
      <p>"Sometimes, I write comments just to feel productive."</p>
    </mat-tab>
    <mat-tab label="Deployment Drama">
      <p>"It worked on localhost, I swear!"</p>
    </mat-tab>
  </mat-tab-group>
                `;
  CSSCodeToCopy1: any;
  TsCodeToCopy1 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
  })
  export class TabsComponent {}
  `;

  HtmlCodeToCopy2 = `
  <mat-tab-group>
    <mat-tab>
      <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">home</mat-icon>
              Home Sweet Home
      </ng-template>
      <p>"Where all the bugs come to rest... for now."</p>
    </mat-tab>

    <mat-tab>
      <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">shopping_cart_checkout</mat-icon>
              Checkout (It's Free, Right?)
      </ng-template>
      <p>"Adding to cart... but you still need to refactor your code!"</p>
    </mat-tab>

    <mat-tab>
      <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">settings</mat-icon>
              Settings... Or Are They?
      </ng-template>
      <p>"Tweaking settings until it works... but don’t touch anything else!"</p>
    </mat-tab>
  </mat-tab-group>
  `;
  CSSCodeToCopy2: any;
  TsCodeToCopy2 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
  })
  export class TabsComponent {}
  `;

  HtmlCodeToCopy3 = `
  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
    <mat-tab label="Hello World!">
      <p>"First tab, and it compiled without errors!"</p>
    </mat-tab>
    <mat-tab label="Align Left">
      <p>The only thing more difficult than centering divs: explaining why.</p>
    </mat-tab>
    <mat-tab label="Bug Life">
      <p>"Not a bug, it’s an undocumented feature."</p>
    </mat-tab>
  </mat-tab-group>

  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
    <mat-tab label="Dark Mode">
      <p>Because real developers work in the dark. 🌑</p>
    </mat-tab>
    <mat-tab label="Light Mode">
      <p>Blinding users since 1999. 💡</p>
    </mat-tab>
    <mat-tab label="High Contrast">
      <p>For when your eyesight matches your debugging skills. 👓</p>
    </mat-tab>
  </mat-tab-group>

  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="end">
    <mat-tab label="CSS Wizardry">
      <p>Where the magic happens… and breaks. 🪄</p>
    </mat-tab>
    <mat-tab label="JavaScript Shenanigans">
      <p>“It worked yesterday” — a JS developer’s mantra. 🤯</p>
    </mat-tab>
    <mat-tab label="404 Creativity">
      <p>When design meets *file not found*. 💻</p>
    </mat-tab>
  </mat-tab-group>
  `;
  CSSCodeToCopy3: any;
  TsCodeToCopy3 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
  })
  export class TabsComponent {}
  `;

  HtmlCodeToCopy4 = `
  <p>No animation</p>
  <mat-tab-group animationDuration="0ms">
    <mat-tab label="Instant Debugging">
      <p>"When your bug fix is faster than your coffee brewing."</p>
    </mat-tab>
    <mat-tab label="Immediate Results">
      <p>"Just like refreshing your browser... with no delay!"</p>
    </mat-tab>
    <mat-tab label="Speed of Light">
      <p>"Not a single frame lost, this tab loads like lightning!"</p>
    </mat-tab>
  </mat-tab-group>

                <p>Very slow animation</p>
  <mat-tab-group animationDuration="2000ms">
    <mat-tab label="Waiting for API Response">
      <p>"It feels like watching paint dry... but it's an API call."</p>
    </mat-tab>
    <mat-tab label="Load More">
      <p>"Give it a minute, it’s slowly loading like your weekend plans."</p>
    </mat-tab>
    <mat-tab label="Waiting for Deployment">
      <p>"Deploying code: It's like waiting for a spaceship to launch."</p>
    </mat-tab>
  </mat-tab-group>
  `;
  CSSCodeToCopy4: any;
  TsCodeToCopy4 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
  })
  export class TabsComponent {}
  `;

  HtmlCodeToCopy5 = `
  <mat-tab-group headerPosition="below">
    <mat-tab label="Pixel Perfect">
      <p>"That feeling when your design is perfectly aligned, except for the one pixel."</p>
    </mat-tab>
    <mat-tab label="Responsive Nightmare">
      <p>"The joy of designing for mobile... and then discovering the hamburger menu didn't work."</p>
    </mat-tab>
    <mat-tab label="Dark Mode">
      <p>"Because light mode was never an option in the dev world."</p>
    </mat-tab>
  </mat-tab-group>
  `;
  CSSCodeToCopy5: any;
  TsCodeToCopy5 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
  })
  export class TabsComponent {}
  `;

  HtmlCodeToCopy6 = `
  <mat-tab-group fitInkBarToContent>
    <mat-tab label="First">
      <p>"The first tab is like the first cup of coffee – essential!"</p>
    </mat-tab>
    <mat-tab label="Second">
      <p>"Just like your second try at a bug fix – it *should* work."</p>
    </mat-tab>
    <mat-tab label="Third">
      <p>"The third tab is for the ones who think they know it all."</p>
    </mat-tab>
    <mat-tab label="Fourth" disabled>
      <p>"This tab is under construction... much like your weekend plans."</p>
    </mat-tab>
  </mat-tab-group>
  `;
  CSSCodeToCopy6: any;
  TsCodeToCopy6 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
  })
  export class TabsComponent {}
  `;

  HtmlCodeToCopy7 = `
  <mat-tab-group preserveContent>
    <mat-tab label="First">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/B-lipaiZII8"
          style="border: 0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
    </mat-tab>
    <mat-tab label="Second">
      <p>"Just like your bug report, the video keeps playing... forever."</p>
      <p>Note how the video from the previous tab is still playing.</p>
    </mat-tab>
  </mat-tab-group>
  `;
  CSSCodeToCopy7: any;
  TsCodeToCopy7 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
  })
  export class TabsComponent {}
  `;

  HtmlCodeToCopy8 = `
  <mat-tab-group>
    @for (tab of lotsOfTabs; track tab) {
        <mat-tab [label]="tab"><p>"The tab that nobody asked for, but it's here anyway."</p></mat-tab>
    }
  </mat-tab-group>
  `;
  CSSCodeToCopy8: any;
  TsCodeToCopy8 = `
  import { Component } from '@angular/core';
  import { MatTabsModule } from '@angular/material/tabs';

  @Component({
    selector: 'app-tabs',
    standalone: true,
    imports: [MatTabsModule],
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
  })
  export class TabsComponent {
    lotsOfTabs = new Array(30).fill(0).map((_, index) => \`Tab \${index}\`);
  }
`;


  constructor() { }

  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);

}
