import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div> {{Title}}
  <h1>Hello {{name}}</h1>
  </div>`
})
export class AppComponent  { 
  Title = 'DemoRepository';
  name = 'Angular'; 
}

