import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [FooterNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [FooterNavComponent]
})
export class FooterNavModule { }
