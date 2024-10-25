import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for ngIf, ngFor
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Required for HTTP requests

@Component({
  selector: 'app-search-engine',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule],
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent {
  searchTerm: string = ''; // Search term bound to input
  results: any[] = [];  // Store search results (assuming array of objects)
  searchPerformed: boolean = false; // Track if search was performed
  apiUrl: string = 'http://192.168.13.63:8000/'; // API endpoint

  constructor(private http: HttpClient) {} // Inject HttpClient

  // Search method to call the API
  search() {
    this.searchPerformed = true;
    const term = this.searchTerm.trim();
  
    if (term) {
      this.http.post<any>(this.apiUrl, { query: term }).subscribe(
        (response) => {
          // Explicitly cast value to the expected type: [string, number, string]
          this.results = Object.entries(response).map(([key, value]) => {
            const [id, score, content] = value as [string, number, string]; // Type assertion
            return { id, score, content };
          });
  
          console.log(this.results);
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching search results:', error);
          this.results = []; // Reset results on error
        }
      );
    } else {
      this.results = []; // Clear results if no input
    }
  }
}
