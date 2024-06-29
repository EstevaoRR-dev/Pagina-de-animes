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

  headerFruit = 'QUE PERSONAGEM COMEU ESTE AKUMA NO MI ?';


}
