import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  standalone: true,
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
})
export class MoviesPage implements OnInit {

  results: Observable<any> | undefined;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged()
  {
    this.results = this.movieService.searchData(this.searchTerm, this.type);

    // this.results.subscribe(res => {
    // })
  }

}
