import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() date: any;

  timer: any;
  days: number = 0;
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setTimer();
  }

  setTimer() {
    this.cd.markForCheck();
    this.timer = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = new Date(this.date).getTime() - now;
          
      // Calculating the days, hours, minutes and seconds left
      this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      this.hours = ('0' + Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
      this.minutes = ('0' + Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
      this.seconds = ('0' + Math.floor((timeleft % (1000 * 60)) / 1000)).slice(-2);

      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(this.timer);
        this.days = 0;
        this.hours = this.minutes = this.seconds = '';
      }
      this.cd.markForCheck();
    }, 1000);
  }
}
