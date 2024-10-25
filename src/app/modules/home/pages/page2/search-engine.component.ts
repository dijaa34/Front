import { Component } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent {
  searchTerm: string = ''; // Search term bound to input
  results: string[] = [];  // Search results to display
  searchPerformed: boolean = false; // Tracks if a search was performed

  // Simulate search logic
  search() {
    this.searchPerformed = true;
    const term = this.searchTerm.trim().toLowerCase();
    
    // Example: Replace with actual API call or data retrieval logic
    if (term) {
      this.results = ['Result 1', 'Result 2', 'Result 3'].filter(result =>
        result.toLowerCase().includes(term)
      );
    } else {
      this.results = [];
    }
  }
}
