
import { Component} from '@angular/core';
import { BasicCardComponent } from '../../card/basic-card/basic-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasicCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  

}
