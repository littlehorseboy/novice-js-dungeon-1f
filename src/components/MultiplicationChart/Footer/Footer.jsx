import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {

};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        abc
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
