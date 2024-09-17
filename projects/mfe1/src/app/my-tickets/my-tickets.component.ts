import { Component } from '@angular/core';

@Component({
  selector: 'app-my-tickets',
  standalone: true,
  imports: [],
  template: `
  <h1>Se aparecer esta linha é que o Module Federation Standalone funcionou.</h1>
    <p>
      my-tickets works!
    </p>
  `,
  styleUrl: './my-tickets.component.scss'
})
export class MyTicketsComponent {

}
