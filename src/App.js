import React, { Component } from 'react';

// import all required components
import FriendZone from './components/FriendZone';
import FriendBox from './components/FriendBox';

import './index.css';

class App extends Component {
// Render method
  render() {

    // JSX
    return (
      <div className="appComponent">
        <h1>App Component</h1>

        {/*
          Rendering the FriendZone component
          - passing it the current friends list on state through as props
        */}
        <div className="friendZone">
          <FriendZone />
        </div>
        
        {/*
          Rendering the FriendBox component
          - passing it the addFriend function as props
        */}
        <div className="friendBox">
          <FriendBox/>
        </div>
      
      </div>
    );
  }
}

export default App;
