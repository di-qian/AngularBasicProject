import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerSel = 'recipe';
  title = 'new-basic-project';

  getHeaderSel(data: string) {
    this.headerSel = data;
  }
}
