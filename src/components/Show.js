import React from 'react';
import { connect } from 'react-redux';
import uuid4 from 'uuid/v4';
import { ListItem, Container } from '@material-ui/core';

class Show extends React.Component {

  render() {
    return (
      <Container>
        <ListItem key={uuid4()}>
          <img src={this.props.show.show.image.medium} alt="show"></img>
          <h4>{this.props.show.show.name}</h4>
          <span>{this.props.show.show.rating.average}</span>
        </ListItem>
      </Container>
    );
  }
}

export default connect()(Show);