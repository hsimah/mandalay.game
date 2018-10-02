import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  rank: string = "red";
  @Input()
  suit: string = "joker";
  @Input()
  back: boolean = false;
  @Input()
  rotate: boolean = false;

  private card: string = '';

  constructor() { }

  private mapSuit = (suit: string): string => {
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
    if (this.back) {
      this.card = 'back';
      return;
    }
    const suit: string = this.mapSuit(this.suit);
    const rank: string = this.mapRank(this.rank);
    this.card = `${suit}_${rank}`;
  }

}
