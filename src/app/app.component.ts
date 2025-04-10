import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  list: string[] = ['Milk', 'Sugar', 'Bread'];

    onAdd(item: string) {
      this.list.push(item);
    }

    onDelete(item: string) {

    }
}
