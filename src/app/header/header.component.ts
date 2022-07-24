import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() headClick = new EventEmitter<string>();
  collapsed = true;

  onSelect(inputName: string) {
    this.headClick.emit(inputName);
  }
}
