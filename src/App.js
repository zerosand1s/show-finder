import React from 'react';
import Search from './components/Search/Search';
import ShowList from './components/ShowList/ShowList';
import { Container } from '@material-ui/core';

import './App.scss';

class App extends React.Component {

  render() {
    return (
      <Container maxWidth={"lg"}>
        <Container className="search-bar-container">
          <Search />
        </Container>
        <Container style={{backgroundColor: 'yellow'}}>
          <ShowList />
        </Container>
      </Container>
    );
  }
}

export default App;
