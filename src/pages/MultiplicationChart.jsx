import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {
  root: {
    width: 1280,
    height: 1372,
    backgroundColor: '#F0F0F0',
  },
};

class MultiplicationChart extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        abc
      </div>
    );
  }
}

MultiplicationChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiplicationChart);
