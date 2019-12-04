import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  aNumber: number;

  ngOnInit() {
  }

  setNumber(aNumber: number) {
    this.aNumber = aNumber;
    console.log('Odd number: ' + this.aNumber);
  }
}
