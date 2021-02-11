import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {

    /* 
        this.retornaObservable().pipe(
          retry(1)
        ).subscribe(
          valor => console.log('sub: ', valor),
          error => console.log('Error ', error),
          () => console.info('Obs terminado')); */

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      take(10),
      map(valor => ++valor),
      filter(valor => (valor % 2 == 0)),
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const interval = setInterval(() => {

        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego a 2');
        }
      }, 1000)
    });
    return obs$;
  }
}
