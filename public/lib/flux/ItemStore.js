import { EventEmitter } from "events";
import AppDispatcher from "./AppDispatcher";

let _allItems = [];

class ItemStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			console.log("3. Action Dispacted", action);
			switch(action.type) {

				case 'RECEIVE_ITEMS':
					_allItems = action.items;
					this.emit("change");
					break;

				case 'ADD_ITEM':
					_allItems.push(action.item);
					_activeItems.push(action.item);
					this.emit("change");
					break;

				case 'SEARCH_ITEM':
					_allItems = _allItems.filter(item => !item.title.indexOf(action.query))
					this.emit("change");
					break;

				default:
					//do nothing
			}
		});
	}
	getAll() {
		return _allItems;
	}
}

export default new ItemStore();