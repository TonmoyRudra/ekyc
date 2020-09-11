import { NgModule } from '@angular/core';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
	imports: [],
	exports: [
		MatButtonToggleModule,
		MatExpansionModule,
		MatTabsModule,
		MatStepperModule,
		MatCheckboxModule,
		NgxMaterialTimepickerModule,
		MatDatepickerModule,
		MatProgressBarModule,
		MatSnackBarModule,
		MatTooltipModule,
		MatToolbarModule,
		MatSliderModule,
		MatSelectModule,
		MatProgressSpinnerModule,
		MatInputModule,
		MatGridListModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatDialogModule,
		MatIconModule,
		MatBadgeModule,
		MatButtonModule,
		MatCardModule,
		MatOptionModule,
		MatNativeDateModule,
		MatListModule,
		MatMenuModule,
		MatRadioModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatChipsModule,
		MatAutocompleteModule,
		MatSlideToggleModule

	],
	declarations: []
})
export class MaterialModule { }
