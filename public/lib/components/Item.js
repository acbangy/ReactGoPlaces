const Item = (props) => (
	<li>{props.title}</li>
);	

Item.propTypes = {
	title: React.PropTypes.string
};

export default Item;