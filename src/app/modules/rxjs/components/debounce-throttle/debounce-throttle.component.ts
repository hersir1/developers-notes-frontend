import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';
import { RxjsShowData } from '../../model/rxjs-response.interface';
import { debounceTime, filter, interval, mergeMap, Subscription, take, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-debounce-throttle',
  templateUrl: './debounce-throttle.component.html',
  styleUrls: ['./debounce-throttle.component.scss'],
})
export class DebounceThrottleComponent {

  public debounceTimeResponses: RxjsShowData[] = [];
  public debounceTimeSubscription: Subscription;

  public throttleTimeResponses: RxjsShowData[] = [];
  public throttleTimeSubscription: Subscription;

  constructor(
    private rxjsService: RxjsService
  ) {
  }

  debounceTimeExample(): void {
    if (this.debounceTimeSubscription) {
      this.debounceTimeSubscription.unsubscribe();
      this.debounceTimeResponses = [];
    }
    this.debounceTimeSubscription = interval(1000)
      .pipe(
        take(5),
        filter((id) => id !== 0),
        tap((id) => this.debounceTimeResponses.push({
          emitValue: id,
          rxjsResponse: null
        })),
        debounceTime(1500),
        mergeMap((id) => this.rxjsService.getData(id)),
        tap((result) => {
          this.debounceTimeResponses = this.debounceTimeResponses.map(elem => {
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

  throttleTimeExample(): void {
    if (this.throttleTimeSubscription) {
      this.throttleTimeSubscription.unsubscribe();
      this.throttleTimeResponses = [];
    }
    this.throttleTimeSubscription = interval(1000)
      .pipe(
        take(5),
        filter((id) => id !== 0),
        tap((id) => this.throttleTimeResponses.push({
          emitValue: id,
          rxjsResponse: null
        })),
        throttleTime(1900),
        mergeMap((id) => this.rxjsService.getData(id)),
        tap((result) => {
          this.throttleTimeResponses = this.throttleTimeResponses.map(elem => {
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
