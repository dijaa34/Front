import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms'; 
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common'; 
import { SearchEngineComponent } from './pages/page2/search-engine.component'; 

@NgModule({
  declarations: [],
  imports: [
    HomeRoutingModule,
    TranslateModule,
    FormsModule, 
    CommonModule,
    SearchEngineComponent
  ],
  exports: [TranslateModule]
})
export class HomeModule {}
