import { Component } from '@angular/core';
import { Header } from '../../models/header';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [ButtonComponent,TranslateModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  header: Header = {title : 'globalDash.globalAnalysis' , path : [{value: 'Youtube',link : '/youtube/search' }, {value : 'globalDash.globalAnalysis', link : '/dashboard/global'}]};
  
  constructor(private router : Router){

  }
  goToPage2() {
    this.router.navigate(['/home/page2']);
  }
}
