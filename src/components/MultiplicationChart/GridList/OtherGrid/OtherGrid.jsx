import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import range from 'lodash/range';

const styles = {
  grid: {
    minWidth: 350,
    minHeight: 366,
    marginBottom: 40,
    borderRadius: '100px 0 30px 0',
    backgroundColor: '#FFFFFF',
    boxShadow: '#D8D8D8 0px 3px 10px',
  },
  gridContent: {
    height: 'calc(366px - 64px - 64px)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '64px 40px',
  },
  titleNumber: {
    fontSize: 128,
    fontWeight: 'bold',
    color: '#2EB738',
    // textAlign: 'center',
    textShadow: '#F0F0F0 4px 3px 0px',
    marginTop: 'calc(34px - 64px)',
    marginLeft: 20,
    marginRight: 50,
  },
  formula: {
    fontSize: 24,
    color: '#2EB738',
    marginBottom: 12,
  },
};

class OtherGrid extends React.Component {
  render() {
    const { classes, multiplicand } = this.props;

    return (
      <div className={classes.grid}>
        <div className={classes.gridContent}>
          <div className={classes.titleNumber}>{multiplicand}</div>
          {
            range(1, 10).map(multiplier => (
              <div key={multiplicand + multiplier} className={classes.formula}>
                {multiplicand} × {multiplier} ＝ {multiplicand * multiplier}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

OtherGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  multiplicand: PropTypes.number.isRequired,
};

export default withStyles(styles)(OtherGrid);
