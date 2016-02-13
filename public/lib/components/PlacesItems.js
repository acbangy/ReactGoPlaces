import Item from './Item';

class PlacesItems extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.items.map(item => <Item key={item.id} {...item} />)}
				</ul>
			</div>
		)
	}
}

export default PlacesItems;