import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://127.0.0.1:5051/predict/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to call the search API with JSON body
  search(nl_query: string): Observable<any> {
    const body = { nl_query }; // Create the request body
    return this.http.post<any>(this.apiUrl, body); // Use POST and send the body
  }
}


