import AddItem from './AddItem';

class Details extends React.Component {
	render() {
		return (
			<div>
				<AddItem addItem={this.props.addItem} />
			</div>
		)
	}
}

export default Details;