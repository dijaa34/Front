import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms'; 
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    TranslateModule,
    FormsModule, 
    CommonModule
  ],
  exports: [TranslateModule]
})
export class HomeModule {}
