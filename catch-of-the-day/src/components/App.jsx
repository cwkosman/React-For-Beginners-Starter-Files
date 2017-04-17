import React from 'react';
import Header from './Header.jsx';
import Order from './Order.jsx'
import Inventory from './Inventory.jsx'
import Fish from './Fish.jsx'
import samplesFishes from '../sample-fishes.js'
import base from '../base.js'

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    //Initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount() {
    //runs right before the app is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    //check for order in localStorage
    const localStorageRef =  localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

  }

  componentWillUnmount() {
    base.removeBase(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order));
  }

  addFish(fish) {
    //ppdate state
    const fishes = {...this.state.fishes};
    //add in new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //Set state
    this.setState({ fishes })
  }

  loadSamples() {
    this.setState({
      fishes: samplesFishes
    });
  }

  addToOrder(key) {
    //take a copy of state
    const order = {...this.state.order};
    //update or add the new # of fish order
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
        />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App
