import {Component} from '@angular/core';
@Component({
    selector: 'text-app',
    template: `
              <input [(ngModel)] ="myMsg"/><br/>
              <input bindon-ngModel ="myMsg"/><br/>
              <input [ngModel] ="myMsg" (ngModelChange) ="myMsg=$event"/><br/>
              <input [value] ="myMsg" (input)="myMsg=$event.target.value"/><br/>
              {{myMsg}}
              `
})
export class TextBoxComponent {
  myMsg = 'Hello World!';
}
