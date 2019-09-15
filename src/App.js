import React from 'react';
import Search from './components/Search';
import ShowList from './components/ShowList';

class App extends React.Component {

  render() {
    return (
      <div>
        <Search />
        <ShowList />
      </div>
    );
  }
}

export default App;
