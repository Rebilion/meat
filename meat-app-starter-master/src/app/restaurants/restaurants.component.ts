import { Component, OnInit } from '@angular/core';

import {Restaurant} from'./restaurant/restaurant.model'
import {RestaurantsService} from'./restaurants.services'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private RestaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.RestaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

}
