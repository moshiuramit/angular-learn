import { Collectable } from "./collectable.model"; 

export class CollectableService {
	private collectables: Collectable[] = [
		{description: " A Very Rare copy or 'Jquery of Dummies' ", type: "Book" },
		{description: " The First Letter ever Written", type: "Piece of Paper" },
		{description: " A Box with Garbage ", type: "Garbege" },
		{description: "A Box with all zsuna ", type: "Photo" }
	];

	private collections: Collectable[] = [];

	getCollectables(){
		return this.collectables;
	}

	getCollection(){
		return this.collections;
	}

	addToCollection(item: Collectable){
		if(this.collections.indexOf(item)!== -1){
			return ;
		}
		this.collections.push(item);
	}

	removeFromCollection(item: Collectable) {
		this.collections.splice(this.collections.indexOf(item), 1);
	}
}