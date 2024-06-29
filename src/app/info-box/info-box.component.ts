import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})

export class InfoBoxComponent {

  @Input({required: true}) headerSection!: string;

}
