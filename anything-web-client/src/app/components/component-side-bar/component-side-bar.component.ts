import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'component-side-bar',
  templateUrl: './component-side-bar.component.html',
  styleUrls: ['./component-side-bar.component.scss'],
})
export class ComponentSideBarComponent {
  @Input() public isSideBarActive: boolean;
  @Input() public data: any;
  @Output() public onChangeSideBar$ = new EventEmitter<boolean>();


  public onClose(): void {
    this.onChangeSideBar$.emit(false);
  }
}
