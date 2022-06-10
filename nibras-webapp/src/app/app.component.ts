import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nibras-webapp';

  //seletcted menu item fild the selected default menu item is home
  selectedMenuItem: string='home';

  menuItemClicked(menuItem: string): void {

    //set seleted menu item for menu
    this.selectedMenuItem = menuItem;
  }
}
