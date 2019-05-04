import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {
  root: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'right',
    lineHeight: '34px',
    color: '#F0F0F0',
    width: '100%',
    backgroundColor: '#2EB738',
  },
  content: {
    marginRight: 85,
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <span className={classes.content}>
          Copyright © 2019 Horse. All rights reserved.
        </span>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
