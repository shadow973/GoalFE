import { Component, Input, OnInit, EventEmitter, ChangeDetectionStrategy, Output } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';

@Component({
  selector: 'app-user-subs',
  templateUrl: './user-subs.component.html',
  styleUrls: ['./user-subs.component.scss']
})
export class UserSubsComponent implements OnInit {
  @Input() subs: any[];
  @Output() removeSub: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  teamImageUrl(id): string {
    return `${environment.storage}/images/teams/${id}.png`;
  }

  unsubscribe(team: any): void {
    this.removeSub.emit(team);
  }
}
