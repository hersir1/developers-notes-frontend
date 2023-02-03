import { Component, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, from, mergeMap, of, switchMap, tap } from 'rxjs';
import { RxjsExamplesService } from '../../services/rxjs-examples.service';

@Component({
    selector: 'app-merge-concat-switch-exhausted',
    templateUrl: './merge-concat-switch-exhausted.component.html',
    styleUrls: ['./merge-concat-switch-exhausted.component.scss']
})
export class MergeConcatSwitchExhaustedComponent implements OnInit {

    constructor(
        private rxjsExampleService: RxjsExamplesService
    ) {
    }

    ngOnInit(): void {
    }

    mergeMapExample(): void {
        from([1, 2, 3, 4])
            .pipe(
                mergeMap((id) => this.rxjsExampleService.getRxJxExampleById(id)),
                tap((result) => console.log(result))
            )
            .subscribe();
    }

    switchMapExample(): void {
        from([1, 2, 3, 4])
            .pipe(
                switchMap((id) => this.rxjsExampleService.getRxJxExampleById(id)),
                tap((result) => console.log(result))
            )
            .subscribe();
    }

    exhaustMapExample(): void {
        from([1, 2, 3, 4])
            .pipe(
                exhaustMap((id) => this.rxjsExampleService.getRxJxExampleById(id)),
                tap((result) => console.log(result))
            )
            .subscribe();
    }

    concatMapExample(): void {
        from([1, 2, 3, 4])
            .pipe(
                concatMap((id) => this.rxjsExampleService.getRxJxExampleById(id)),
                tap((result) => console.log(result))
            )
            .subscribe();
    }
}
