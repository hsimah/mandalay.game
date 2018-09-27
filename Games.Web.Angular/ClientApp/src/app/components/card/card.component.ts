import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() rank: string;
  @Input() suit: string;

  private card: string = '';

  constructor() {}

  private mapSuit = (suit: string): string => {
    console.log(suit)
    switch (suit) {
      case 'Clubs':
        return 'club';
      case 'Diamonds':
        return 'diamond';
      case 'Hearts':
        return 'heart';
      case 'Spades':
        return 'spade';
      default:
        return suit;
    }
  };

  private mapRank = (rank: string): string => {
    switch (rank) {
      case 'Ace':
        return '1';
      case 'Jack':
      case 'Queen':
      case 'King':
        return rank.toLowerCase();
      default:
        return rank;
    }
  };

  ngOnInit() {
    const suit: string = this.mapSuit(this.suit);
    const rank: string = this.mapRank(this.rank);
    this.card = `${suit}_${rank}`;
  }

}
