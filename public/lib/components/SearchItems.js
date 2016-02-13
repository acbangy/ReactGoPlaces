import ItemActions from "./../flux/ItemActions";

class SearchItems extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: ""
		};
	}

	handleSearch(synEvent) {
		ItemActions.search(synEvent.target.value)
	}

	render() {
		return (
			<form>
				<input placeholder="Search..."
						onChange={this.handleSearch}/>
			</form>
		)
	}
}

export default SearchItems;