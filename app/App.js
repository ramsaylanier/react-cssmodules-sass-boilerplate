import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.scss';

class App extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className="application">
        {children}
      </div>
    )
  }
}

export default App;
