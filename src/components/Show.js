import React from 'react';
import { connect } from 'react-redux';
import uuid4 from 'uuid/v4';

class Show extends React.Component {

  render() {
    return (
      <div>
        <li key={uuid4()}>
          {this.props.show.score}
        </li>
      </div>
    );
  }
}

export default connect()(Show);