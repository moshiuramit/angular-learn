import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
  // add provider instance here if we want to use it within this component and its child component
})
export class MarketComponent implements OnInit {
  collectables = [];

  constructor(private collectableService: CollectableService) { }

  onAddtoCollection(item: Collectable) {
  	this.collectableService.addToCollection(item);
  }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}
