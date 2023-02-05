import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RxjsResponse } from '../model/rxjs-response.interface';

@Injectable()
export class RxjsService {

  private basePath: string = 'http://localhost:8080';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getDataWithDelay(id: number): Observable<RxjsResponse> {
    return this.httpClient.get<RxjsResponse>(`${this.basePath}/data-with-delay/${id}`);
  }

  getData(id: number): Observable<RxjsResponse> {
    return this.httpClient.get<RxjsResponse>(`${this.basePath}/data/${id}`);
  }
}
