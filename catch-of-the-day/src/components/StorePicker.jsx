import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // One method for binding
  // constructor() {
  //   this.goToStore = this.goToStore.bind(this)
  //   super();
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('you changed the url');
    //first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    //second transition route
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    //Anywhere else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        {/* Hello */}
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue = {getFunName()} ref={(input) => {this.storeInput=input}}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
