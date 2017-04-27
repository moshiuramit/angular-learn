import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

	collectables = [
		{description: " A Very Rare copy or 'Jquery of Dummies' ", type: "Book" },
		{description: " The First Letter ever Written", type: "Piece of Paper" },
		{description: " A Box with Garbage ", type: "Garbege" },
		{description: "A Box with all zsuna ", type: "Photo" }
	];
  constructor() { }

  onAddtoCollection() {
  	alert("Hello ! ");
  }

  ngOnInit() {
  }

}
