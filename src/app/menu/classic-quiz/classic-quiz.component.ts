import { Component } from '@angular/core';
import { GameHeaderComponent } from '../../header/game-header/game-header.component';
import { CompleteCharsComponent } from '../../complete-chars/complete-chars.component';

@Component({
  selector: 'app-classic-quiz',
  standalone: true,
  imports: [GameHeaderComponent, CompleteCharsComponent],
  templateUrl: './classic-quiz.component.html',
  styleUrl: './classic-quiz.component.css'
})
export class ClassicQuizComponent {
  yesterDay = localStorage.getItem('yesterDay');

  constructor(){
    if(this.yesterDay === null){
      localStorage.setItem('yesterDay', 'Ashura Doji');
      this.yesterDay = 'Ashura Doji';
    }
  }
}
