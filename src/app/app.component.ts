import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange'
      }),
      animate(1000, style({
        borderRadius: '50px'
      })),
      animate(500)
    ]),
  ])
]
})
export class AppComponent {
  state = 'normal';
  wild = 'normal';
  list: string[] = ['Milk', 'Sugar', 'Bread'];

    onAdd(item: string) {
      this.list.push(item);
    }

    onDelete(item: string) {

    }

    onAnimate() {
      this.state = this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wild = this.wild === 'normal' ? this.wild = 'highlighted' : this.wild = 'normal';
    }

    onShrink() {
      this.wild = 'shrunken';
    }
}
