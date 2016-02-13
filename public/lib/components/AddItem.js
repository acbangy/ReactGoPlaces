class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titleInput: ""
		};
	}

	updateTitleInput(synEvent) {
		this.setState({ titleInput: synEvent.target.value })
	}

	handleSubmit(synEvent) {
		synEvent.preventDefault();
		this.props.addItem({ title: this.state.titleInput });
		this.setState({ titleInput: "" });
	}

	render() {
		return (
			<div className="add-item">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label htmlFor="title">Title
						<input id="title" placeholder="Title..." 
								value={this.state.titleInput} 
								onChange={this.updateTitleInput.bind(this)}/>
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default AddItem;