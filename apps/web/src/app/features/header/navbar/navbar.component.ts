import { environment } from './../../../../environments/environment';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavbarStore } from '../../../stores/navbar.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  navbarItems: any[];

  constructor(
    private navbarStore: NavbarStore
  ) { }

  ngOnInit(): void {
    this.navbarItems = this.navbarStore.getDesktopNavbarItems();
  }

  imageLinkGenerator(id): string {
    return `${environment.storage}/size/timthumb.php?src=/images/teams/${id}.png&w=17`;
  }

  imageLinkGeneratorCountry(id): string {
    return `${environment.storage}//images/countries/flags/${id}`;
  }

}