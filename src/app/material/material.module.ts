import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';


const materialComponents = [

  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  LayoutModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatListModule,
  MatTooltipModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatExpansionModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
