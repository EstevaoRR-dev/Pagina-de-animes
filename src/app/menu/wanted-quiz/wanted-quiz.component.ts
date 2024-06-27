import { Component } from '@angular/core';
import { GameHeaderComponent } from "../../header/game-header/game-header.component";

@Component({
    selector: 'app-wanted-quiz',
    standalone: true,
    templateUrl: './wanted-quiz.component.html',
    styleUrl: './wanted-quiz.component.css',
    imports: [GameHeaderComponent]
})
export class WantedQuizComponent {

}
