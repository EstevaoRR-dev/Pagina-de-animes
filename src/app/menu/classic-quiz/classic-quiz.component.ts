import { Component } from '@angular/core';
import { GameHeaderComponent } from '../../header/game-header/game-header.component';
import { CompleteCharsComponent } from '../../complete-chars/complete-chars.component';
import { InfoBoxComponent } from '../../info-box/info-box.component';
import { personagens } from '../../personagens';

@Component({
  selector: 'app-classic-quiz',
  standalone: true,
  imports: [GameHeaderComponent, CompleteCharsComponent, InfoBoxComponent],
  templateUrl: './classic-quiz.component.html',
  styleUrl: './classic-quiz.component.css'
})
export class ClassicQuizComponent {
  yesterDay = localStorage.getItem('yesterDay');
  headerSection = 'Adivinha qual é a personagem de One Piece de hoje!'
  gameStart = false;
  atemptsCount = 8;

  choosenCharacter = personagens[4];

  constructor(){
    if(this.yesterDay === null){
      localStorage.setItem('yesterDay', 'Ashura Doji');
      this.yesterDay = 'Ashura Doji';
    }
  }


}
