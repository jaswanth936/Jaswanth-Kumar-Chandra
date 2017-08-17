import {Component, Input} from '@angular/core';
import { App } from './app';
@Component({
    selector: 'emp-app',
    template: `
				 <br/> {{emp.name}} - {{emp.age}}
	            `
})
export class EmployeeComponent {
    @Input() emp: App ;
}
