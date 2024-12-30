import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  readonly panelOpenState = signal(false);
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }
  isCopied: boolean = false;
  HtmlCodeToCopy1 = `
    <mat-accordion>
      <mat-expansion-panel hideToggle>
        <mat-expansion-panel-header>
            <mat-panel-title> Explore Nature's Secrets </mat-panel-title>
            <mat-panel-description> A glimpse into the wonders of the wild </mat-panel-description>
        </mat-expansion-panel-header>
        <p>Discover the hidden beauty of nature's untold stories.</p>
      </mat-expansion-panel>
                      
      <mat-expansion-panel (opened)="panelOpenState.set(true)" (closed)="panelOpenState.set(false)">
          <mat-expansion-panel-header>
              <mat-panel-title> Nature's Whispering Panel </mat-panel-title>
              <mat-panel-description>
                Currently, nature's door is {{panelOpenState() ? 'open' : 'closed'}}
              </mat-panel-description>
          </mat-expansion-panel-header>
          <p>Feel the calm of nature's embrace, only when it's open.</p>
      </mat-expansion-panel>
    </mat-accordion>
  `;
  CSSCodeToCopy1: any;
  TsCodeToCopy1 = `
    import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
    import {MatExpansionModule} from '@angular/material/expansion';

    @Component({
      selector: 'app-expansion-panel',
      standalone: true,
      imports: [MatExpansionModule],
      templateUrl: './expansion-panel.component.html',
      styleUrl: './expansion-panel.component.scss'
    })
    export class ExpansionPanelComponent {
      readonly panelOpenState = signal(false);
    }
  `;

  HtmlCodeToCopy2 = `
    <mat-accordion class="example-headers-align">
      <mat-expansion-panel [expanded]="step() === 0" (opened)="setStep(0)" hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title> Personal data </mat-panel-title>
          <mat-panel-description>
              Type your name and age
              <mat-icon>account_circle</mat-icon>
          </mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field>
        <mat-label>First name</mat-label>
            <input matInput />
        </mat-form-field>

        <mat-form-field>
        <mat-label>Age</mat-label>
            <input matInput type="number" min="1" />
        </mat-form-field>
        <mat-action-row>
            <button mat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel [expanded]="step() === 1" (opened)="setStep(1)" hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title> Destination </mat-panel-title>
          <mat-panel-description>
              Type the country name
              <mat-icon>map</mat-icon>
          </mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field>
        <mat-label>Country</mat-label>
          <input matInput />
        </mat-form-field>

        <mat-action-row>
          <button mat-button (click)="prevStep()">Previous</button>
          <button mat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel [expanded]="step() === 2" (opened)="setStep(2)" hideToggle>
        <mat-expansion-panel-header>
          <mat-panel-title> Day of the trip </mat-panel-title>
            <mat-panel-description>
                Inform the date you wish to travel
                <mat-icon>date_range</mat-icon>
            </mat-panel-description>
          </mat-expansion-panel-header>

          <mat-form-field>
          <mat-label>Date</mat-label>
              <input matInput [matDatepicker]="picker" (focus)="picker.open()" readonly />
          </mat-form-field>
          <mat-datepicker #picker></mat-datepicker>

          <mat-action-row>
            <button mat-button (click)="prevStep()">Previous</button>
            <button mat-button (click)="nextStep()">End</button>
          </mat-action-row>
        </mat-expansion-panel>
    </mat-accordion>
  `;
  TsCodeToCopy2 = `
    import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
    import {MatButtonModule} from '@angular/material/button';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatExpansionModule} from '@angular/material/expansion';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {MatIconModule} from '@angular/material/icon';
    import {MatInputModule} from '@angular/material/input';

    @Component({
    selector: 'app-expansion-panel',
    templateUrl: './expansion-panel.component.html',
    styleUrl: './expansion-panel.component.scss'
    standalone: true,
    providers: [provideNativeDateAdapter()],
    imports: [
      MatExpansionModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatDatepickerModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class ExpansionPanelComponent {
      step = signal(0);

      setStep(index: number) {
        this.step.set(index);
      }

      nextStep() {
        this.step.update(i => i + 1);
      }

      prevStep() {
        this.step.update(i => i - 1);
      }
    }
  `;
  CSSCodeToCopy2 = `
    .example-headers-align .mat-expansion-panel-header-description {
      justify-content: space-between;
      align-items: center;
    }

    .example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {
      margin-left: 8px;
    }
  `;

  HtmlCodeToCopy3 = ``;
  TsCodeToCopy3 = ``;
  CSSCodeToCopy3 = ``;


  constructor() { }

}
