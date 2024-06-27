import { Component } from '@angular/core';
import { GameHeaderComponent } from "../../header/game-header/game-header.component";

@Component({
    selector: 'app-laugh-quiz',
    standalone: true,
    templateUrl: './laugh-quiz.component.html',
    styleUrl: './laugh-quiz.component.css',
    imports: [GameHeaderComponent]
})
export class LaughQuizComponent {

}
