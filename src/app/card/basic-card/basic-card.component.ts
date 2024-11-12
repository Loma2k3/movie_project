import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-basic-card',
  standalone: true,
  imports: [BasicCardComponent, RouterLink],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.css'
})
export class BasicCardComponent{
  @Input() genre!: string;
  @Input() releaseDate!: string;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() id!: string;

  constructor(private router: Router) {}
  
  navigateToDetail() {
    this.router.navigate(['/detail']);
  }

  chooseMovie() {
    localStorage.setItem('MovieId', this.id.toString());
    console.log("click choose event");
  }

}
