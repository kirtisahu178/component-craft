import { Component, OnInit, inject } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { StickyCardComponent } from "../sticky-card/sticky-card.component";
import { CodeTabDesignComponent } from "../code-tab-design/code-tab-design.component";

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [MaterialModule, AsyncPipe, ReactiveFormsModule, StickyCardComponent, CodeTabDesignComponent],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent implements OnInit {

  genderFormControl = new FormControl('');
  numberFormControl = new FormControl('');
  genderOptions: string[] = ['Female', 'Male', 'Transgender'];
  numberOptions: string[] = ['One', 'Two', 'Three'];
  genderFilteredOptions: Observable<string[]> | undefined;
  numberFilteredOptions: Observable<string[]> | undefined;

  HtmlCodeToCopy1 = `
      <form class="example-form">
          <mat-form-field class="example-full-width" appearance="outline" floatLabel="always">
              <mat-label>Number</mat-label>
              <input type="text" placeholder="--Select an option--" aria-label="Number" matInput [formControl]="numberFormControl"
                [matAutocomplete]="autoNumber">
              <mat-autocomplete #autoNumber="matAutocomplete">
                  @for (option of numberFilteredOptions | async; track option) {
                    <mat-option [value]="option">{{option}}</mat-option>
                  }
              </mat-autocomplete>
          </mat-form-field>
      </form>
  `;

  TsCodeToCopy1 = `
      import { Component, OnInit } from '@angular/core';
      import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
      import { Observable } from 'rxjs';
      import { map, startWith } from 'rxjs/operators';
      import { AsyncPipe } from '@angular/common';
      import { MatAutocompleteModule } from '@angular/material/autocomplete';
      import { MatInputModule } from '@angular/material/input';
      import { MatFormFieldModule } from '@angular/material/form-field';

      @Component({
        selector: 'app-autocomplete',
        standalone: true,
        imports: [AsyncPipe, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule],
        templateUrl: './autocomplete.component.html',
        styleUrl: './autocomplete.component.scss'
      })
      export class AutocompleteComponent implements OnInit {

        numberFormControl = new FormControl('');
        numberOptions: string[] = ['One', 'Two', 'Three'];
        numberFilteredOptions: Observable<string[]> | undefined;

        ngOnInit() {
          this.numberFilteredOptions = this.numberFormControl.valueChanges.pipe(
            startWith(''),
            map(value => this.number_filter(value || '')),
          );
        }

        private number_filter(value: string): string[] {
          const filterValue = value.toLowerCase();
          return this.numberOptions.filter(option => option.toLowerCase().includes(filterValue));
        }
      }
  `;

  CSSCodeToCopy1 = `
      .example-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }

      .example-full-width {
        width: 100%;
      }
  `;

  HtmlCodeToCopy2 = `
      <form class="example-form">
          <mat-form-field class="example-full-width" appearance="outline" floatLabel="always">
              <mat-label>Gender</mat-label>
              <input type="text" placeholder="--Select an option--" aria-label="Gender" matInput [formControl]="genderFormControl"
                  [matAutocomplete]="autoGender">
              <mat-autocomplete autoActiveFirstOption #autoGender="matAutocomplete">
                  @for (option of genderFilteredOptions | async; track option) {
                    <mat-option [value]="option">{{option}}</mat-option>
                  }
              </mat-autocomplete>
          </mat-form-field>
      </form>
  `;

  TsCodeToCopy2 = `
      import { Component, OnInit } from '@angular/core';
      import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
      import { Observable } from 'rxjs';
      import { map, startWith } from 'rxjs/operators';
      import { AsyncPipe } from '@angular/common';
      import { MatAutocompleteModule } from '@angular/material/autocomplete';
      import { MatInputModule } from '@angular/material/input';
      import { MatFormFieldModule } from '@angular/material/form-field';

      @Component({
        selector: 'app-autocomplete',
        standalone: true,
        imports: [AsyncPipe, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule],
        templateUrl: './autocomplete.component.html',
        styleUrl: './autocomplete.component.scss'
      })
      export class AutocompleteComponent implements OnInit {

        genderFormControl = new FormControl('');
        genderOptions: string[] = ['One', 'Two', 'Three'];
        genderFilteredOptions: Observable<string[]> | undefined;

        ngOnInit() {
          this.genderFilteredOptions = this.genderFormControl.valueChanges.pipe(
            startWith(''),
            map(value => this.gender_filter(value || '')),
          );
        }

        private gender_filter(value: string): string[] {
          const filterValue = value.toLowerCase();
          return this.genderOptions.filter(option => option.toLowerCase().includes(filterValue));
        }
      }
  `;

  CSSCodeToCopy2 = `
      .example-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }

      .example-full-width {
        width: 100%;
      }
  `;

  HtmlCodeToCopy3 = `
      <form [formGroup]="stateForm" class="example-form">
          <mat-form-field class="example-full-width" appearance="outline" floatLabel="always">
              <mat-label>States Group</mat-label>
              <input type="text" matInput placeholder="--Select an option--" formControlName="stateGroup" required [matAutocomplete]="autoGroup">
              <mat-autocomplete #autoGroup="matAutocomplete">
                  @for (group of stateGroupOptions | async; track group) {
                    <mat-optgroup [label]="group.letter">
                        @for (name of group.names; track name) {
                          <mat-option [value]="name">{{name}}</mat-option>
                        }
                    </mat-optgroup>
                  }
              </mat-autocomplete>
          </mat-form-field>
      </form>
  `;

  TsCodeToCopy3 = `
      import { Component, OnInit, inject } from '@angular/core';
      import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
      import { Observable } from 'rxjs';
      import { map, startWith } from 'rxjs/operators';
      import { AsyncPipe } from '@angular/common';
      import { MatAutocompleteModule } from '@angular/material/autocomplete';
      import { MatInputModule } from '@angular/material/input';
      import { MatFormFieldModule } from '@angular/material/form-field';

      export interface StateGroup {
        letter: string;
        names: string[];
      }

      export const _filter = (opt: string[], value: string): string[] => {
        const filterValue = value.toLowerCase();
        return opt.filter(item => item.toLowerCase().includes(filterValue));
      };

      @Component({
        selector: 'app-autocomplete',
        standalone: true,
        imports: [AsyncPipe, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule],
        templateUrl: './autocomplete.component.html',
        styleUrl: './autocomplete.component.scss'
      })
      export class AutocompleteComponent implements OnInit {
        private _formBuilder = inject(FormBuilder);

        stateForm = this._formBuilder.group({
          stateGroup: '',
        });

        stateGroupOptions: Observable<StateGroup[]> | undefined;

        stateGroups: StateGroup[] = [
          {
            letter: 'A',
            names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
          },
          {
            letter: 'C',
            names: ['California', 'Colorado', 'Connecticut'],
          },
          {
            letter: 'D',
            names: ['Delaware'],
          },
          {
            letter: 'F',
            names: ['Florida'],
          },
          {
            letter: 'G',
            names: ['Georgia'],
          },
          {
            letter: 'H',
            names: ['Hawaii'],
          },
          {
            letter: 'I',
            names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
          },
          {
            letter: 'K',
            names: ['Kansas', 'Kentucky'],
          },
          {
            letter: 'L',
            names: ['Louisiana'],
          },
          {
            letter: 'M',
            names: [
              'Maine',
              'Maryland',
              'Massachusetts',
              'Michigan',
              'Minnesota',
              'Mississippi',
              'Missouri',
              'Montana',
            ],
          },
          {
            letter: 'N',
            names: [
              'Nebraska',
              'Nevada',
              'New Hampshire',
              'New Jersey',
              'New Mexico',
              'New York',
              'North Carolina',
              'North Dakota',
            ],
          },
          {
            letter: 'O',
            names: ['Ohio', 'Oklahoma', 'Oregon'],
          },
          {
            letter: 'P',
            names: ['Pennsylvania'],
          },
          {
            letter: 'R',
            names: ['Rhode Island'],
          },
          {
            letter: 'S',
            names: ['South Carolina', 'South Dakota'],
          },
          {
            letter: 'T',
            names: ['Tennessee', 'Texas'],
          },
          {
            letter: 'U',
            names: ['Utah'],
          },
          {
            letter: 'V',
            names: ['Vermont', 'Virginia'],
          },
          {
            letter: 'W',
            names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
          },
        ];

        ngOnInit() {
          this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
            startWith(''),
            map(value => this._filterGroup(value || '')),
          );
        }

        private _filterGroup(value: string): StateGroup[] {
          if (value) {
            return this.stateGroups
              .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
              .filter(group => group.names.length > 0);
          }
          return this.stateGroups;
        }

      }
  `;

  CSSCodeToCopy3 = `
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }
  `;


  constructor() { }

  private _formBuilder = inject(FormBuilder);

  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  stateGroupOptions: Observable<StateGroup[]> | undefined;

  ngOnInit() {
    this.numberFilteredOptions = this.numberFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this.number_filter(value || '')),
    );

    this.genderFilteredOptions = this.genderFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this.gender_filter(value || '')),
    );

    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  private number_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.numberOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private gender_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.genderOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }



}
