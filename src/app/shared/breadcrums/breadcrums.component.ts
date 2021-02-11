import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {

  public title: string = "";
  public titleSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.titleSubs$ = this.getArgumentsRouter().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  private getArgumentsRouter() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
