import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  catchError,
  concatMap,
  delay,
  EMPTY,
  exhaustMap,
  filter,
  from,
  interval,
  mergeMap,
  Subscription,
  switchMap,
  take,
  tap
} from 'rxjs';
import { RxjsService } from '../../services/rxjs.service';
import { RxjsResponse, RxjsShowData } from '../../model/rxjs-response.interface';

@Component({
  selector: 'app-merge-concat-switch-exhausted',
  templateUrl: './merge-concat-switch-exhausted.component.html',
  styleUrls: ['./merge-concat-switch-exhausted.component.scss'],
})
export class MergeConcatSwitchExhaustedComponent implements OnInit {

  public switchMapResponses: RxjsShowData[] = [];
  public switchMapSubscription: Subscription;

  public mergeMapResponses: RxjsShowData[] = [];
  public mergeMapSubscription: Subscription;

  public concatMapResponses: RxjsShowData[] = [];
  public concatMapSubscription: Subscription;

  public exhaustMapResponses: RxjsShowData[] = [];
  public exhaustMapSubscription: Subscription;

  constructor(
    private rxjsService: RxjsService
  ) {
  }

  ngOnInit(): void {

  }

  mergeMapExample(): void {
    if (this.mergeMapSubscription) {
      this.mergeMapSubscription.unsubscribe();
      this.mergeMapResponses = [];
    }
    this.mergeMapSubscription = from([1, 2, 3, 4])
      .pipe(
        tap((id) => this.mergeMapResponses.push({
          emitValue: id,
          rxjsResponse: null
        })),
        mergeMap((id) => this.rxjsService.getDataWithDelay(id)),
        tap((result) => {
          this.mergeMapResponses = this.mergeMapResponses.map(elem => {
            if (elem.emitValue === result.id) {
              return {
                emitValue: elem.emitValue,
                rxjsResponse: result
              }
            }
            return elem;
          })
        })
      )
      .subscribe();
  }

  switchMapExample(): void {
    if (this.switchMapSubscription) {
      this.switchMapSubscription.unsubscribe();
      this.switchMapResponses = [];
    }
    this.switchMapSubscription = from([1, 2, 3, 4])
      .pipe(
        tap((id) => this.switchMapResponses.push({
          emitValue: id,
          rxjsResponse: null
        })),
        switchMap((id) => this.rxjsService.getDataWithDelay(id)),
        tap((result) => {
          this.switchMapResponses = this.switchMapResponses.map(elem => {
            if (elem.emitValue === result.id) {
              return {
                emitValue: elem.emitValue,
                rxjsResponse: result
              }
            }
            return elem;
          })
        })
      )
      .subscribe();
  }

  exhaustMapExample(): void {
    if (this.exhaustMapSubscription) {
      this.exhaustMapSubscription.unsubscribe();
      this.exhaustMapResponses = [];
    }
    this.exhaustMapSubscription = from([1, 2, 3, 4])
      .pipe(
        tap((id) => this.exhaustMapResponses.push({
          emitValue: id,
          rxjsResponse: null
        })),
        exhaustMap((id) => this.rxjsService.getDataWithDelay(id)),
        tap((result) => {
          this.exhaustMapResponses = this.exhaustMapResponses.map(elem => {
            if (elem.emitValue === result.id) {
              return {
                emitValue: elem.emitValue,
                rxjsResponse: result
              }
            }
            return elem;
          })
        })
      )
      .subscribe();
  }

  concatMapExample(): void {
    if (this.concatMapSubscription) {
      this.concatMapSubscription.unsubscribe();
      this.concatMapResponses = [];
    }
    this.concatMapSubscription = from([1, 2, 3, 4])
      .pipe(
        tap((id) => this.concatMapResponses.push({
          emitValue: id,
          rxjsResponse: null
        })),
        concatMap((id) => this.rxjsService.getDataWithDelay(id)),
        tap((result) => {
          this.concatMapResponses = this.concatMapResponses.map(elem => {
            if (elem.emitValue === result.id) {
              return {
                emitValue: elem.emitValue,
                rxjsResponse: result
              }
            }
            return elem;
          })
        })
      )
      .subscribe();
  }
}
