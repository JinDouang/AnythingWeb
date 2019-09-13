import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() public isSideBarActive: boolean;
  @Input() public data: any;
  @Output() public onChangeSideBar$ = new EventEmitter<boolean>();


  public onClose(): void {
    this.onChangeSideBar$.emit(false);
  }
}
