import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Semester1Component } from './module/semester1/semester1.component';

const routes: Routes = [{ path: '', component: Semester1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
