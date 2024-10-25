import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for ngIf, ngFor
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Required for HTTP requests

@Component({
  selector: 'app-sql-engine',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule],
  templateUrl: './sql_engine.component.html', // Ensure this path is correct
  styleUrls: ['./sql_engine.component.scss'] // Ensure this path is correct
})
export class SQLEngineComponent {
  searchTerm: string = ''; // Search term bound to input
  results: any[] = [];  // Store search results (assuming array of objects)
  searchPerformed: boolean = false; // Track if search was performed
  isLoading: boolean = false; // Track loading state
  apiUrl: string = 'http://127.0.0.1:5051/predict/'; // API endpoint

  constructor(private http: HttpClient) {} // Inject HttpClient

  // Search method to call the API
  search() {
    this.searchPerformed = true;
    this.isLoading = true; // Start loading

    const term = this.searchTerm.trim();
  
    if (term) {
      // Prepare the request payload
      const payload = { nl_query: term };

      this.http.post<any>(this.apiUrl, payload).subscribe(
        (response) => {
          this.results = response.result; // Assuming result holds the data
          console.log(this.results);
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching search results:', error);
          this.results = []; // Reset results on error
        },
        () => {
          this.isLoading = false; // Stop loading when done
        }
      );
    } else {
      this.results = []; // Clear results if no input
      this.isLoading = false; // Stop loading if no input
    }
  }

  getTableHeaders(): string[] {
    return this.results.length > 0 ? Object.keys(this.results[0]) : []; // Dynamically get headers
  }
}
