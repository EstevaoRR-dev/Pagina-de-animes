import { Personagem } from './../../personagensBck';
import { personagens } from './../../personagens';
import { Component } from '@angular/core';
import { GameHeaderComponent } from "../../header/game-header/game-header.component";
import { InfoBoxComponent } from '../../info-box/info-box.component';
import { CompleteCharsComponent } from '../../complete-chars/complete-chars.component';

@Component({
    selector: 'app-wanted-quiz',
    standalone: true,
    templateUrl: './wanted-quiz.component.html',
    styleUrl: './wanted-quiz.component.css',
    imports: [GameHeaderComponent, InfoBoxComponent, CompleteCharsComponent]
})
export class WantedQuizComponent {

  headerWanted = 'QUE PERSONAGEM APARECE NESTE CARTAZ DE "WANTED"?'
  filteredListLenght!:number
  tryNumber = 7;
  blurNumber = 8;
  quizzEnd = false;
  blurStatus = 'blur(8px) grayscale(1)';
  todayChar = personagens[Math.floor(Math.random() * 52)];

  bottomBounds():string{
    if(this.filteredListLenght >= 4){
      return '566px';
    }
    else if(this.filteredListLenght === 3){
      return '628px';
    }
    else if(this.filteredListLenght === 2){
      return '690px';
    }
    else if(this.filteredListLenght === 1){
      return '750px';
    }
    else{
      return '';
    }
  }

  imgBlur(){
    if(this.tryNumber === 0){
      alert('Você perdeu!!!');
    }
    else if(this.tryNumber > 1){
      this.blurNumber -= 1;
      this.blurStatus = 'blur(' + this.blurNumber + 'px) grayscale(1)';
    }
  }

  charSelected(choosenChar: Personagem){
    if(choosenChar.nome === this.todayChar.name){
      alert('Você acertou!!!');
      this.blurStatus = '';
    }
    else{
      this.tryNumber--;
      this.imgBlur();
    }
  }

}
