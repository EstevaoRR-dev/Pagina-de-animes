import { Component } from '@angular/core';
import { GameHeaderComponent } from "../../header/game-header/game-header.component";
import { InfoBoxComponent } from '../../info-box/info-box.component';
import { CompleteCharsComponent } from '../../complete-chars/complete-chars.component';

@Component({
    selector: 'app-fruit-quiz',
    standalone: true,
    templateUrl: './fruit-quiz.component.html',
    styleUrl: './fruit-quiz.component.css',
    imports: [GameHeaderComponent, InfoBoxComponent, CompleteCharsComponent]
})
export class FruitQuizComponent {
  tip1Count = 5;
  tip2Count = 7;
  tip3Count = 13;

  filteredListLenght!:number;

  headerFruit = 'QUE PERSONAGEM COMEU ESTE AKUMA NO MI ?';

  bottomBounds():string{
    if(this.filteredListLenght >= 4){
      return '338px';
    }
    else if(this.filteredListLenght === 3){
      return '400px';
    }
    else if(this.filteredListLenght === 2){
      return '462px';
    }
    else if(this.filteredListLenght === 1){
      return '526px';
    }
    else{
      return '';
    }
  }

}
