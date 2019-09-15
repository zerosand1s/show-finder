import React from 'react';
import { connect } from 'react-redux';
import { searchShowAction } from '../actions/searchShowAction';

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
      <div>
        <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)}></input>
        <button type="submit" onClick={this.handleClick.bind(this)}>Search</button>
      </div>
    );
  }
}

export default connect()(Search);