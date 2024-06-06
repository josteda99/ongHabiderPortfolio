import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Semester1RoutingModule } from './semester1-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [CommonModule, Semester1RoutingModule, MatDialogModule, MatCardModule, NgbModule]
})
export class Semester1Module {}
