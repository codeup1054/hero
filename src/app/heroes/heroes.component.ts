import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],

})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('@@ e'+ hero.name);
  }
}

// function getColor(x) {
//   return x < 5     ?    '#9A2E21':
//     x < 10     ?   '#f03b20':
//     x < 20     ?   '#fd8d3c':
//       x < 40     ?   '#fecc5c':
//         x < 80     ?   '#42B71B': // населенный пункт
//           x < 110     ?   '#00a757': // превышение в городе
//           '#005799' ; //  превышение на трассе
// };
