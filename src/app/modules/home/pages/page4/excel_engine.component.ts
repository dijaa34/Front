import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-excel-engine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './excel_engine.component.html',
  styleUrls: ['./excel_engine.component.scss']
})
export class EXCELEngineComponent {
  searchTerm: string = '';
  answer: string = ''; // Store the answer as a string
  searchPerformed: boolean = false;
  isLoading: boolean = false;
  apiUrl: string = 'http://127.0.0.1:8000/query';

  constructor(private http: HttpClient) {}

  search() {
    this.searchPerformed = true;
    this.isLoading = true;

    const term = this.searchTerm.trim();

    if (term) {
      const payload = { question: term };

      this.http.post<any>(this.apiUrl, payload).subscribe(
        (response) => {
          this.answer = response.answer; // Capture the answer field
          console.log(this.answer);
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching search results:', error);
          this.answer = 'Error retrieving answer.';
        },
        () => {
          this.isLoading = false;
        }
      );
    } else {
      this.answer = ''; // Clear answer if no input
      this.isLoading = false;
    }
  }
}

