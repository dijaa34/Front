import { Component } from '@angular/core';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss'
})
export class SearchEngineComponent {
  searchTerm: string = '';
  results: string[] = [];
  searchPerformed: boolean = false;

  // Simulate a search operation
  search() {
    this.searchPerformed = true;
    if (this.searchTerm.trim() === '') {
      this.results = [];
    } else {
      // Fake search logic - replace this with real data fetching
      this.results = ['Result 1', 'Result 2', 'Result 3'].filter(result =>
        result.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}

