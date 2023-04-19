import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

interface Tiempo {
  hours: number;
  minutes: number;
  seconds: number;
}


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private reloj$ = new BehaviorSubject<Tiempo>(this.currentTime) 

  constructor() {
    setInterval(()=> {
      this.reloj$.next(this.currentTime);
    }, 1000)
   }

  get clock(): Observable<string> {
    return this.reloj$.asObservable()
    .pipe(
      map((time) => {
        return `${time.hours}:${time.minutes}:${time.seconds}`;
      })
    )
  }

  get currentTime(): Tiempo {
    const now = new Date();

    return{
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    }
  }
}

