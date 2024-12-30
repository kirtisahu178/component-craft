import { ChangeDetectionStrategy, Component, Injectable, inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { provideNativeDateAdapter, DateAdapter } from '@angular/material/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDateRangeSelectionStrategy } from '@angular/material/datepicker';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Injectable()
export class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter<D>);

  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 2);
      return new DateRange<D>(start, end);
    }
    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [MaterialModule, FormsModule,
    ReactiveFormsModule, StickyCardComponent, CodeTabDesignComponent],
  providers: [provideNativeDateAdapter(),
  {
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: FiveDayRangeSelectionStrategy,
  },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})

export class DatepickerComponent {

  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  readonly date = new FormControl(new Date());
  // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
  private readonly _currentYear = new Date().getFullYear();
  readonly minDate = new Date(this._currentYear - 20, 0, 1);
  readonly maxDate = new Date(this._currentYear + 1, 11, 31);



  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  isCopied: boolean = false;
  HtmlCodeToCopy1 = `
    <mat-form-field>
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="basicDatePicker">
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="basicDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #basicDatePicker></mat-datepicker>
    </mat-form-field>
  `;
  CSSCodeToCopy1: any;
  TsCodeToCopy1 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {}
  `;

  HtmlCodeToCopy2 = `
    <mat-form-field class="example-full-width">
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="touchUiDatePicker">
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="touchUiDatePicker"></mat-datepicker-toggle>
      <mat-datepicker touchUi #touchUiDatePicker></mat-datepicker>
    </mat-form-field>
  `;
  CSSCodeToCopy2: any;
  TsCodeToCopy2 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {}
  `;

  HtmlCodeToCopy3 = `
    <mat-form-field>
      <mat-label>Angular forms</mat-label>
      <input matInput [matDatepicker]="picker1" [formControl]="date">
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="picker1"></mat-datepicker-toggle>
      <mat-datepicker #picker1></mat-datepicker>
    </mat-form-field> &nbsp;

    <mat-form-field>
      <mat-label>Value binding</mat-label>
      <input matInput [matDatepicker]="picker2" [value]="date.value">
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>
      <mat-datepicker #picker2></mat-datepicker>
    </mat-form-field>
  `;
  CSSCodeToCopy3: any;
  TsCodeToCopy3 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule,
      ReactiveFormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {
      readonly date = new FormControl(new Date());
    }
`;

  HtmlCodeToCopy4 = `
    <mat-form-field>
      <mat-label>Choose a date</mat-label>
      <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="minMaxValidationPicker" />
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="minMaxValidationPicker"></mat-datepicker-toggle>
      <mat-datepicker #minMaxValidationPicker></mat-datepicker>
    </mat-form-field>
  `;
  CSSCodeToCopy4: any;
  TsCodeToCopy4 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {
      // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
      private readonly _currentYear = new Date().getFullYear();
      readonly minDate = new Date(this._currentYear - 20, 0, 1);
      readonly maxDate = new Date(this._currentYear + 1, 11, 31);
    }
  `;

  HtmlCodeToCopy5 = `
    <mat-form-field>
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepickerFilter]="myFilter" [matDatepicker]="filterDatePicker">
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="filterDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #filterDatePicker></mat-datepicker>
    </mat-form-field>
  `;
  CSSCodeToCopy5: any;
  TsCodeToCopy5 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {
      myFilter = (d: Date | null): boolean => {
        const day = (d || new Date()).getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
      };
    }
  `;

  HtmlCodeToCopy6 = `
    <p>
      <mat-form-field>
        <mat-label>Completely disabled</mat-label>
        <input matInput [matDatepicker]="dp1" disabled>
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="dp1"></mat-datepicker-toggle>
        <mat-datepicker #dp1></mat-datepicker>
      </mat-form-field>
    </p>

    <p>
      <mat-form-field>
        <mat-label>Popup disabled</mat-label>
        <input matInput [matDatepicker]="dp2">
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="dp2" disabled></mat-datepicker-toggle>
        <mat-datepicker #dp2></mat-datepicker>
      </mat-form-field>
    </p>

    <p>
      <mat-form-field>
        <mat-label>Input disabled</mat-label>
        <input matInput [matDatepicker]="dp3" disabled>
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="dp3"></mat-datepicker-toggle>
        <mat-datepicker #dp3 disabled="false"></mat-datepicker>
      </mat-form-field>
    </p>
  `;
  CSSCodeToCopy6: any;
  TsCodeToCopy6 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {}
`;

  HtmlCodeToCopy7 = `
    <mat-form-field>
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="customIconDatepicker">
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="customIconDatepicker">
        <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>
      </mat-datepicker-toggle>
      <mat-datepicker #customIconDatepicker></mat-datepicker>
    </mat-form-field>
  `;
  CSSCodeToCopy7: any;
  TsCodeToCopy7 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatIconModule} from '@angular/material/icon';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {}
`;

  HtmlCodeToCopy8 = `
    <mat-form-field>
      <mat-label>Enter a date range</mat-label>
      <mat-date-range-input [rangePicker]="dateRangePicker">
        <input matStartDate placeholder="Start date">
        <input matEndDate placeholder="End date">
      </mat-date-range-input>
      <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="dateRangePicker"></mat-datepicker-toggle>
      <mat-date-range-picker #dateRangePicker></mat-date-range-picker>
    </mat-form-field>
  `;
  CSSCodeToCopy8: any;
  TsCodeToCopy8 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {}
`;

  HtmlCodeToCopy9 = `
    <mat-form-field>
      <mat-label>Enter a date range</mat-label>
      <mat-date-range-input [rangePicker]="customSelectionDatePicker">
        <input matStartDate placeholder="Start date">
        <input matEndDate placeholder="End date">
      </mat-date-range-input>
      <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="customSelectionDatePicker"></mat-datepicker-toggle>
      <mat-date-range-picker #customSelectionDatePicker></mat-date-range-picker>
    </mat-form-field>
  `;
  CSSCodeToCopy9: any;
  TsCodeToCopy9 = `
      import {ChangeDetectionStrategy, Component, Injectable, inject} from '@angular/core';
      import {DateAdapter, provideNativeDateAdapter} from '@angular/material/core';
      import {
        DateRange,
        MAT_DATE_RANGE_SELECTION_STRATEGY,
        MatDateRangeSelectionStrategy,
        MatDatepickerModule,
      } from '@angular/material/datepicker';
      import {MatFormFieldModule} from '@angular/material/form-field';

      @Injectable()
      export class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
        private _dateAdapter = inject<DateAdapter<D>>(DateAdapter<D>);

        selectionFinished(date: D | null): DateRange<D> {
          return this._createFiveDayRange(date);
        }

        createPreview(activeDate: D | null): DateRange<D> {
          return this._createFiveDayRange(activeDate);
        }

        private _createFiveDayRange(date: D | null): DateRange<D> {
          if (date) {
            const start = this._dateAdapter.addCalendarDays(date, -2);
            const end = this._dateAdapter.addCalendarDays(date, 2);
            return new DateRange<D>(start, end);
        }

        return new DateRange<D>(null, null);
      }
    }

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [
        {
          provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
          useClass: FiveDayRangeSelectionStrategy,
        },
        provideNativeDateAdapter(),
      ],
      standalone: true,
      imports: [MatFormFieldModule, MatDatepickerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {}
`;

  HtmlCodeToCopy10 = `
    <mat-form-field>
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="actionBtnDatePicker" />
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="actionBtnDatePicker"></mat-datepicker-toggle>
      <mat-datepicker #actionBtnDatePicker>
        <mat-datepicker-actions>
            <button mat-button matDatepickerCancel>Cancel</button>
            <button mat-raised-button matDatepickerApply>Apply</button>
        </mat-datepicker-actions>
      </mat-datepicker>
    </mat-form-field>&nbsp;

    <mat-form-field>
      <mat-label>Enter a date range</mat-label>
      <mat-date-range-input [rangePicker]="actionBtnRangePicker">
          <input matStartDate placeholder="Start date" />
          <input matEndDate placeholder="End date" />
      </mat-date-range-input>
      <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="actionBtnRangePicker"></mat-datepicker-toggle>
      <mat-date-range-picker #actionBtnRangePicker>
        <mat-date-range-picker-actions>
            <button mat-button matDateRangePickerCancel>Cancel</button>
            <button mat-raised-button matDateRangePickerApply>Apply</button>
        </mat-date-range-picker-actions>
      </mat-date-range-picker>
    </mat-form-field>
  `;
  CSSCodeToCopy10: any;
  TsCodeToCopy10 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatInputModule} from '@angular/material/input';
    import {MatFormFieldModule} from '@angular/material/form-field';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatButtonModule} from '@angular/material/button';

    @Component({
      selector: 'app-datepicker',
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
    })
    export class DatepickerOverviewExample {}
`;

  HtmlCodeToCopy11 = `
    <mat-form-field>
      <mat-label>First campaign</mat-label>
      <mat-date-range-input [formGroup]="campaignOne" [rangePicker]="campaignOnePicker"
          [comparisonStart]="campaignTwo.value.start" [comparisonEnd]="campaignTwo.value.end">
          <input matStartDate placeholder="Start date" formControlName="start">
          <input matEndDate placeholder="End date" formControlName="end">
      </mat-date-range-input>
      <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="campaignOnePicker"></mat-datepicker-toggle>
      <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>
    </mat-form-field> &nbsp;

    <mat-form-field>
      <mat-label>Second campaign</mat-label>
      <mat-date-range-input [formGroup]="campaignTwo" [rangePicker]="campaignTwoPicker"
          [comparisonStart]="campaignOne.value.start" [comparisonEnd]="campaignOne.value.end">
          <input matStartDate placeholder="Start date" formControlName="start">
          <input matEndDate placeholder="End date" formControlName="end">
      </mat-date-range-input>
      <mat-datepicker-toggle matIconSuffix [for]="campaignTwoPicker"></mat-datepicker-toggle>
      <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
      <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>
    </mat-form-field>
  `;
  CSSCodeToCopy11: any;
  TsCodeToCopy11 = `
    import {ChangeDetectionStrategy, Component} from '@angular/core';
    import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
    import {provideNativeDateAdapter} from '@angular/material/core';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import {MatFormFieldModule} from '@angular/material/form-field';

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    @Component({
      selector: 'app-datepicker',
      templateUrl: './datepicker.component.html',
      styleUrl: './datepicker.component.scss'
      standalone: true,
      providers: [provideNativeDateAdapter()],
      imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class DateRangePickerComparisonExample {
      readonly campaignOne = new FormGroup({
        start: new FormControl(new Date(year, month, 13)),
        end: new FormControl(new Date(year, month, 16)),
      });
      readonly campaignTwo = new FormGroup({
        start: new FormControl(new Date(year, month, 15)),
        end: new FormControl(new Date(year, month, 19)),
      });
    }
  `;

  constructor() { }

  
}
