import React from 'react';
import Header from './Header.jsx';
import Order from './Order.jsx'
import Inventory from './Inventory.jsx'


class App extends React.Component {
  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App
