import { personagens } from './../../personagens';
import { Component } from '@angular/core';
import { GameHeaderComponent } from '../../header/game-header/game-header.component';
import { CompleteCharsComponent } from '../../complete-chars/complete-chars.component';
import { InfoBoxComponent } from '../../info-box/info-box.component';
import { Personagem } from '../../personagensBck';

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

  choosenCharacter:Array<Personagem> = [];

  todayCharacter = personagens[28];

  constructor(){
    if(this.yesterDay === null){
      localStorage.setItem('yesterDay', 'Ashura Doji');
      this.yesterDay = 'Ashura Doji';
    }
  }


  getAkumaType(akuma:String) {
    const regex = /\(([^)]+)\)/;
    const match = akuma.match(regex);
    if(match){
      return match[1];
    }
    else{
      return 'Não Possui'
    }
  }

  getWantedColor(char:Personagem):String{

    if(this.todayCharacter.haki === char.haki){
      return 'background-color: #44BB6A'
    }
    else if(this.todayCharacter.haki !== char.haki && this.todayCharacter.haki.find(item =>
      (item === char.haki[0] || item === char.haki[1] || item === char.haki[2])
    )){
      return 'background-color: #F3E249'
    }
    else{
      return 'background-color: #D53633'
    }
  }

}

