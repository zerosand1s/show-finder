import React from 'react';
import { connect } from 'react-redux';
import uuid4 from 'uuid/v4';
import { Grid, Container, ListItem, Paper, Typography, Divider } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';

import './Show.scss';

class Show extends React.Component {

  render() {
    return (
      <Container>
        <ListItem key={uuid4()} className="list-item">
          <Grid container direction="row" className="grid-container">
            <Grid item xs={2} className="grid-item-image">
              {(this.props.show.show.image) ?
                <img src={this.props.show.show.image.medium} alt="show" className="show-image"></img> :
                <img src="" alt="show" className="show-image"></img>
              }              
            </Grid>
            <Grid item xs={9} className="grid-item-paper">
              <Paper elevation={0} className="paper">
                <Typography variant="h5">{this.props.show.show.name}</Typography>
                <Typography 
                  component="p"
                  variant="body2"
                  align="justify"        
                  paragraph={true}
                >
                  {ReactHtmlParser(this.props.show.show.summary)}
                </Typography>
              </Paper>
              {/* <span>{this.props.show.show.rating.average}</span> */}
            </Grid>
          </Grid>
        </ListItem>
        <Divider></Divider>
      </Container>
    );
  }
}

export default connect()(Show);