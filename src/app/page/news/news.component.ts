import { Component } from '@angular/core';
import { BasicCardComponent } from '../../card/basic-card/basic-card.component';
import { NewsCardComponent } from '../../card/news-card/news-card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
