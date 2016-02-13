import AppDispatcher from "./AppDispatcher";
import API from "./API";

const ItemActions = {
	receiveItems(items) {
		console.log("2. In Actions");
		AppDispatcher.dispatch({
			type: 'RECEIVE_ITEMS',
			items
		});
	},
	addItem(item) {
		AppDispatcher.dispatch({
			type: 'ADD_ITEM',
			item
		})
	},
	search(query){
		AppDispatcher.dispatch({
			type: 'SEARCH_ITEM',
			query
		})

	},
	getAllItems() {
		API.getAllItems();
	},
	createItem(inputItem) {
		API.setNewItem(inputItem);
	}
};

export default ItemActions;