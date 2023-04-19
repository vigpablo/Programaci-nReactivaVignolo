import { Component, OnDestroy } from '@angular/core';
import { TimeService } from '../../core/services/time.service';
import { Time } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  horaActualNoAsync: string | null = null; 

  horaActual$: Observable<string>;

  subscriptionRef: Subscription | null;

  constructor(private timeService: TimeService) {
    
    this.horaActual$ = this.timeService.clock;

    this.subscriptionRef = this.timeService.clock.subscribe((valor) => this.horaActualNoAsync = valor);

  }
  ngOnDestroy(): void {
    this.subscriptionRef?.unsubscribe()
  }
}
