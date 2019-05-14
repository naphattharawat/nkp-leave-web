import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  constructor(
    private httpClient: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) {
  }

  list(limit: number, offset: number) {
    // tslint:disable-next-line:variable-name
    const _url = `${this.apiUrl}/employee-types?limit=${limit}&offset=${offset}`;
    return this.httpClient.get(_url)
      .toPromise();
  }
}
