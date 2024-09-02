import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowtimesCardComponent } from './movie-showtimes-card.component';

describe('MovieShowtimesCardComponent', () => {
  let component: MovieShowtimesCardComponent;
  let fixture: ComponentFixture<MovieShowtimesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieShowtimesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieShowtimesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
