import {Component} from '@angular/core';
import {Student} from './student';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Update Person';
  fullName = '';
  studentObj = new Student(100, 'Mahesh', 'Sharma');
  saveData(emp) {
    this.fullName = emp.fname + ' ' + emp.lname ;
  }

  // ngStyle Binding example
  result = 50;
  colorFlag = false;
  isSmall = true;
  isBackgroundRed = false;
  small = 10;
  big = 15;
  num = 10;
  isRed(num) {
    if (num > 10) {
        return false;
    } else {
        return true;
    }
  }
  allRequiredStyles(styleSet) {
    let myStyles;
    if (styleSet === 'one') {
      myStyles = {
        'color':  this.colorFlag ? 'black' : 'yellow',
        'font-size.em': this.isSmall ? this.small / 5 : this.big / 5,
        'background-image': !this.isBackgroundRed ? 'url(\'images/red.gif\')' : 'url(\'images/green.gif\')'
      };
    } else if (styleSet === 'two') {
      myStyles = {
        'color':  !this.colorFlag ? 'black' : 'yellow',
        'font-size.em': !this.isSmall ? this.small / 5 : this.big / 5,
        'background-image': this.isBackgroundRed ? 'url(\'images/red.gif\')' : 'url(\'images/green.gif\')'
      };
    } else {
      myStyles = {
        'background-color':  this.colorFlag ? 'cyan' : 'grey',
        'font-size.%': !this.isSmall ? this.small * 10 : this.big * 10
      };
    }
    return myStyles;
  }
}


