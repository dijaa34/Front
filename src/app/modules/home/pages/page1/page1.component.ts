import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';


@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [ButtonComponent,TranslateModule],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  constructor(private router : Router){

  }
  goToPage2() {
    this.router.navigate(['/home/page2']);
  }

  goToPage3() {
    this.router.navigate(['/home/page3']);
  } 

  goToPage4() {
    this.router.navigate(['/home/page4']);
  } 
}
