import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.scss']
})
export class WildcardComponent implements OnInit {
  @Input()
  card: Card;

  constructor() { }

  ngOnInit() {
  }

}
