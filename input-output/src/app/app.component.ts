import {Component} from '@angular/core';
import {Student} from './student';
@Component({
    selector: 'input-output',
    templateUrl: './app.component.html'
})
export class AppComponent {
  parentTitle = 'Parent Component';

	// Property for child component one
  cityMsg = 'Indian City Names';
  cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  // Property for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Narendra', 'Modi');

  // Property used in parent
  stdFullName = '';
  sum = '';
  msg = '';
  saveData(std) {
    this.stdFullName = std.fname + ' ' + std.lname ;
  }
  printSum(res) {
    this.sum = res;
  }
  printMsg(msg) {
    this.msg = msg;
  }

  // Event Binding Example Start
  isValid = true;
  msg1 = 'Hello World';
  msg2 = '';
  msg3 = '';
  setMsg(data: string) {
      this.msg1 = data;
  }
  changeText(mytext: string) {
      this.msg3 = mytext;
        }
  //Event Binding End
}
