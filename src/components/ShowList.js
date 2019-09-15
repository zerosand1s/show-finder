import React from 'react';
import { connect } from 'react-redux';
import Show from './Show';
import uuid4 from 'uuid/v4';

class ShowList extends React.Component {

  render() {

    const showList = this.props.searchShow.shows.map(s => <Show key={uuid4()} show={s} />);
    
    return (
      <div>
        <ul>
          {showList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(ShowList);