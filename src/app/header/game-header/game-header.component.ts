import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-game-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css'
})
export class GameHeaderComponent {

  constructor(){
    if(!this.streakNumber){
      localStorage.setItem('streak', '0');
      this.streakNumber = '0';
    }
  }

  @Input({required: true}) iconSelected!:number;
  @Output() switch = new EventEmitter<number>();
  streakNumber = localStorage.getItem('streak');

  menuSwitch(id:number){
    this.switch.emit(id);
  }

}
