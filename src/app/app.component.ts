import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ClassicQuizComponent } from './menu/classic-quiz/classic-quiz.component';
import { FruitQuizComponent } from "./menu/fruit-quiz/fruit-quiz.component";
import { LaughQuizComponent } from "./menu/laugh-quiz/laugh-quiz.component";
import { WantedQuizComponent } from "./menu/wanted-quiz/wanted-quiz.component";
import { GameHeaderComponent } from "./header/game-header/game-header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, MenuComponent, ClassicQuizComponent, FruitQuizComponent, LaughQuizComponent, WantedQuizComponent, GameHeaderComponent]
})
export class AppComponent {
  gameStart: boolean = false;
  actualMenu = true;
  menuId!:number;

  actionEvent(id:number){
    this.gameStart = true;
    this.menuId = id;
  }

}
