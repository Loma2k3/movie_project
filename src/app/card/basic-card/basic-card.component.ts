import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-basic-card',
  standalone: true,
  imports: [BasicCardComponent, RouterLink],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.css'
})
export class BasicCardComponent {

}
