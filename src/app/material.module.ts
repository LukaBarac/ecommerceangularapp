import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';



@NgModule({
    
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        FlexLayoutModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        FlexLayoutModule,
        MatTableModule
    ]
})

export class MaterialModule {}