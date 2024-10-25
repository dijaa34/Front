import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  loading$ = this.loadingService.loading$;

  constructor(private loadingService: LoaderService) {}
}
