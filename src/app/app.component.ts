import { Component } from '@angular/core';
import { nextTick } from 'q';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenComponents = [];
  oddComponents = [];

  onGameStarted(numberData: { nextNumber: number }) {
    const aNumber = numberData.nextNumber;
    if (aNumber % 2 === 0) {
      const even = new EvenComponent();
      even.setNumber(aNumber);
      this.evenComponents.push(even);
    } else {
      const odd = new OddComponent();
      odd.setNumber(aNumber);
      this.oddComponents.push(odd);
    }
  }

  onGameEnded() {
    this.evenComponents.splice(0, this.evenComponents.length);
    this.oddComponents.splice(0, this.oddComponents.length);
  }
}
