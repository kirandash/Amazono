import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // Import Http Client

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {
    // Inject http
  }

  get(link: string) {
    // Gets the results from link and returns as a promise
    return this.http.get(link).toPromise();
  }

  post(link: string, body: any) {
    // post data to link as a promise
    return this.http.post(link, body).toPromise();
  }
}
