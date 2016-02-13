import Search from "./Search";
import PlacesItems from "./PlacesItems";
import Detail from "./Detail";
import ItemStore from "./../flux/ItemStore";
import ItemAction from "./../flux/ItemActions";

let _getAppState = () => {
  return { items: ItemStore.getAll() };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.addItem = this.addItem.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);

  }

  addItem(inputItem) {
    ItemAction.createItem(inputItem);
  }
  
  componentDidMount() {
    ItemAction.getAllItems();
    ItemStore.on("change", this.onStoreChange);
  }

  componentWillUnmount() {
    ItemStore.removeListenter("change", this.onStoreChange);
  }

  onStoreChange() {
    console.log("4. In the view CB");
    this.setState(_getAppState());
  }

  render() {
    return (
      <div>
        <h3>GoPlaces</h3>
        <Search />
        <PlacesItems items={this.state.items} />
        <Detail addItem={this.addItem}/>
        <div className="clearfix"></div>
        <div className="total-statement"><i>{this.state.items.length} Items</i></div>
      </div>
    );
  }
}

export default App;
