import {Component} from '@angular/core';
import { App } from './app';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    isValid = true;
    msg1 = 'Hello World';
    msg2 = '';
    msg3 = '';
    users = [
    new App('Mahesh', 20),
    new App('Krishna', 22),
    new App('Narendra', 30)
    ];
    setMsg(data: string) {
        this.msg1 = data;
    }
    changeText(mytext: string) {
        this.msg3 = mytext;
    }
}

