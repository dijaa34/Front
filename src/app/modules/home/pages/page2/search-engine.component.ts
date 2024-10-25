import { CommonModule } from '@angular/common'; // Required for ngIf, ngFor
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Required for HTTP requests
import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-search-engine',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule],
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})

export class SearchEngineComponent {
  searchTerm: string = ''; 
  results: any[] = []; 
  searchPerformed: boolean = false; 
  apiUrl: string = 'http://192.168.13.63:8000/';
  expandedIds: Set<string> = new Set(); // Track expanded content

  constructor(private http: HttpClient) {}

  // Helper to detect Arabic text
  isArabic(text: string): boolean {
    const arabicPattern = /[\u0600-\u06FF]/;
    return arabicPattern.test(text);
  }

  // Toggle expanded/collapsed state
  toggleReadMore(id: string): void {
    if (this.expandedIds.has(id)) {
      this.expandedIds.delete(id); // Collapse content
    } else {
      this.expandedIds.add(id); // Expand content
    }
  }

  // Check if a result is expanded
  isExpanded(id: string): boolean {
    return this.expandedIds.has(id);
  }

  // Show the "Read More" button if the content is initially clamped
  shouldShowReadMore(id: string, element: HTMLElement): boolean {
    // Always show "Read Less" when the content is expanded
    if (this.isExpanded(id)) {
      return true;
    }
    // Check for overflow to determine if "Read More" should be shown initially
    return element.scrollHeight > element.offsetHeight;
  }

  // Search method to call the API
  search() {
    this.searchPerformed = true;
    const term = this.searchTerm.trim();

    if (term) {
      this.http.post<any>(this.apiUrl, { query: term }).subscribe(
        (response) => {
          this.results = Object.entries(response).map(([key, value]) => {
            const [id, score, content] = value as [string, number, string];
            return { id, score, content };
          });
          console.log(this.results);
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching search results:', error);
          this.results = []; 
        }
      );
    } else {
      this.results = []; 
    }
  }

  
}
