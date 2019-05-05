import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import range from 'lodash/range';
import FirstGrid from './FirstGrid/FirstGrid.jsx';
import OtherGrid from './OtherGrid/OtherGrid.jsx';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 85,
    marginRight: 85,
  },
};

class GridList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {range(1, 10).map(multiplicand => (
          <React.Fragment key={multiplicand}>
            {multiplicand === 1
              ? <FirstGrid />
              : <OtherGrid multiplicand={multiplicand} />}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

GridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridList);
