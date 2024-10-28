import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for ngIf, ngFor
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Required for HTTP requests

@Component({
  selector: 'app-sql-engine',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './sql_engine.component.html',
  styleUrls: ['./sql_engine.component.scss']
})
export class SQLEngineComponent {
  searchTerm: string = ''; 
  results: any[] = [];  
  searchPerformed: boolean = false; 
  isLoading: boolean = false; 
  apiUrl: string = 'http://localhost:8001/'; 

  constructor(private http: HttpClient) {}

  search() {
    this.searchPerformed = true;
    this.isLoading = true;

    const term = this.searchTerm.trim();

    if (term) {
      const payload = { nl_query: term };

      this.http.post<any>(this.apiUrl, payload).subscribe(
        (response) => {
          this.results = response.result;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching search results:', error);
          this.results = [];
        },
        () => {
          this.isLoading = false;
        }
      );
    } else {
      this.results = [];
      this.isLoading = false;
    }
  }

  getTableHeaders(): string[] {
    return this.results.length > 0 ? Object.keys(this.results[0]) : [];
  }
}
