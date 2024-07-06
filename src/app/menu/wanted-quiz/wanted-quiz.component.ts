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

}
