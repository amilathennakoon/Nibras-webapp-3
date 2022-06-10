import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nibras-webapp';
  selectedMenuItem: string;

  menuItemClicked(menuItem: string): void {
    this.selectedMenuItem = menuItem;
  }
}
