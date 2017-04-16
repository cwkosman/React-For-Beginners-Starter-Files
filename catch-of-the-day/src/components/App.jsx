import React from 'react';
import Header from './Header.jsx';
import Order from './Order.jsx'
import Inventory from './Inventory.jsx'
import samplesFishes from '../sample-fishes.js'


class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
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

  loadSamples() {
    this.setState({
      fishes: samplesFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App
