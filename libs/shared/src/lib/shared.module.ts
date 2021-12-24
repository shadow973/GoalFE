import { TruncatePipe } from './pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SafePipe } from './pipes/safe.pipe';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { StripPipe } from './pipes/strip.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';

const pipes = [
  TruncatePipe,
  SafePipe,
  ToDatePipe,
  StripPipe,
  SlugifyPipe
];

@NgModule({
  declarations: [
    pipes
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    pipes
  ],
  providers: [
    pipes
  ]
})
export class SharedModule { }
