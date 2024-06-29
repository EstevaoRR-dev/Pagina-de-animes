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

}
