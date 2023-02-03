import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { RxjsExample } from '../rxjs-example.interface';

@Injectable()
export class RxjsExamplesService {

    private basePath: string = 'http://localhost:8080';

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getRxJxExampleById(id: number): Observable<RxjsExample> {
        console.log(id)
        return this.httpClient.get<RxjsExample>(`${this.basePath}/users/${id}`)
            .pipe(
                catchError(err => {
                    console.log(err)
                    return EMPTY;
                })
            );
    }
}
