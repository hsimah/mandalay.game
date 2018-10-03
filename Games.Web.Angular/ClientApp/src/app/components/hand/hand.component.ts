import { Component, OnInit, Input } from '@angular/core';

import { Player } from '../../models/player';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input()
  player: Player;

  constructor() { }

  ngOnInit() {
  }

}
