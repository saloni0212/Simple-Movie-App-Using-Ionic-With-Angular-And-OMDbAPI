import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';

interface MovieDetail {
  Title: string;
  Year: string;
  Genre: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  Director: string;
  Actors: string;
  Website: string;
}

@Component({
  standalone: true,
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class MovieDetailsPage implements OnInit {
  information!: MovieDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe((result) => {
      console.log('details: ', result);
      this.information = result as MovieDetail;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}
