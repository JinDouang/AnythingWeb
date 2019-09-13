import {Component} from '@angular/core';
import {RoutingKeys} from '../../core/routing/routing-keys';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  public readonly routingKeys = RoutingKeys;

  public isMobile(): boolean {
    // is windows screen lesser than 768px
    return window.screen.width < 768;
  }
}
