import { get, post } from 'jquery';

import ItemActions from "./ItemActions";

const API = {
	getAllItems() {
		console.log("1. In API");
		get("api/data")
			.done(serverData => ItemActions.receiveItems(serverData.items))
			.fail(error => console.error(error))
	},
	setNewItem(inputItem) {
		post("api/new", inputItem)
			.done(serverItem => ItemActions.addItem(serverItem))
			.fail(error => console.error(error))
	}
}

export default API;