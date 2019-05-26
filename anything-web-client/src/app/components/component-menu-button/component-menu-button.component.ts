import {Component} from '@angular/core';
import {RoutingKeys} from '../../core/routing/routing-keys';

@Component({
  selector: 'component-menu-button',
  templateUrl: './component-menu-button.component.html',
  styleUrls: ['./component-menu-button.component.scss'],
})
export class ComponentMenuButtonComponent {
  public readonly routingKeys = RoutingKeys;

  public isMobile(): boolean {
    // is windows screen lesser than 768px
    return window.screen.width < 768;
  }
}
