import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<{ nextNumber: number }>();
  @Output() gameEnded = new EventEmitter<{ any }>();

  interval;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    let index = 1;
    this.interval = setInterval(() => {
      this.gameStarted.emit({ nextNumber: ++index });
    }, 1000, this.gameStarted);
  }

  stopGame() {
    clearInterval(this.interval);
    this.gameEnded.emit(null);
  }
}
