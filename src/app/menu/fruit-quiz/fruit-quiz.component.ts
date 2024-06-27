import { Component } from '@angular/core';
import { GameHeaderComponent } from "../../header/game-header/game-header.component";

@Component({
    selector: 'app-fruit-quiz',
    standalone: true,
    templateUrl: './fruit-quiz.component.html',
    styleUrl: './fruit-quiz.component.css',
    imports: [GameHeaderComponent]
})
export class FruitQuizComponent {

}
