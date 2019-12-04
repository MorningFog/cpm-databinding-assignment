import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  aNumber: number;

  ngOnInit() {
  }

  setNumber(aNumber: number) {
    this.aNumber = aNumber;
    console.log('Even number: ' + this.aNumber);
  }
}
