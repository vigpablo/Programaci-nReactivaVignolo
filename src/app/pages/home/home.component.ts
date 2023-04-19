import { Component } from '@angular/core';
import { TimeService } from '../../core/services/time.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //horaActual: Time | null = null; 

  horaActual$: Observable<string>;

  constructor(private timeService: TimeService) {
    //this.timeService.clock.subscribe((horaActual) => this.horaActual = horaActual);
    this.horaActual$ = this.timeService.clock;

  }
}
