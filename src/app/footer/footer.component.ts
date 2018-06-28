import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <p>&copy; all rights reserved - Khaled Abek -{{year}}</p>
  `,
  styles: [`
  p{
    text-align:center;
  }
  `]
})
export class FooterComponent {
  
  year=new Date().getFullYear();

}
