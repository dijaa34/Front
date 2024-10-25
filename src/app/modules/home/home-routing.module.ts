import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { SearchEngineComponent } from './pages/page2/search-engine.component';
import { Page3Component } from './pages/page3/page3.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home/page1', pathMatch: 'full' },
      { path: 'page1', component : Page1Component},
      { path: 'page2', component :SearchEngineComponent },
      { path: 'page3', component : Page3Component},
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
