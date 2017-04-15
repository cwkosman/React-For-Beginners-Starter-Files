import React from 'react';
import Header from './Header.jsx';
import Order from './Order.jsx'
import Inventory from './Inventory.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    //Initial state
    this.state = {
      fishes: {},
      order: {}
    }
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}

export default App
