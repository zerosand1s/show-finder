import React from 'react';
import { connect } from 'react-redux';
import { searchShowAction } from '../actions/searchShowAction';
import { Container, Input, Button } from '@material-ui/core';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  handleClick = () => {
    this.props.dispatch(searchShowAction(this.state.query));
  }

  render() {
    return (
      <Container>
        <Container maxWidth="md">
          <Input
            fullWidth={true}
            value={this.state.query}
            onChange={this.handleChange.bind(this)}
            placeholder='Enter show name'
            autoFocus={true}
          >
          </Input>
        </Container>
        <Container maxWidth="sm">
          <Button onClick={this.handleClick.bind(this)} disableRipple={true} >Search</Button>
        </Container>
      </Container>
    );
  }
}

export default connect()(Search);