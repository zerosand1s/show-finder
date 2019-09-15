import React from 'react';
import Search from './components/Search';
import ShowList from './components/ShowList';
import { Container } from '@material-ui/core';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Search />
        <ShowList />
      </Container>
    );
  }
}

export default App;
