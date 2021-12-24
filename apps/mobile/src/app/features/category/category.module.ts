import { MainNewsModule } from './../main-news/main-news.module';
import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CoreModule } from '@goal-front/core';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MainNewsModule,
    CoreModule
  ]
})
export class CategoryModule { }
