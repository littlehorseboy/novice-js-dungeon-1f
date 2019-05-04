import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import range from 'lodash/range';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 85,
    marginRight: 85,
  },
  grid: {
    width: 350,
    height: 366,
    borderRadius: '100px 0 30px 0',
    backgroundColor: '#FFFFFF',
    boxShadow: '#D8D8D8 0px 3px 10px',
    marginBottom: 40,
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

class GridList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {range(1, 10).map(n => (
          <div key={n} className={classes.grid}>
            <div className={classes.gridContent}>
              <div className={classes.titleNumber}>{n}</div>
              <div className={classes.formula}>{n} × 1 ＝ {n * 1}</div>
              <div className={classes.formula}>{n} × 2 ＝ {n * 2}</div>
              <div className={classes.formula}>{n} × 3 ＝ {n * 3}</div>
              <div className={classes.formula}>{n} × 4 ＝ {n * 4}</div>
              <div className={classes.formula}>{n} × 5 ＝ {n * 5}</div>
              <div className={classes.formula}>{n} × 6 ＝ {n * 6}</div>
              <div className={classes.formula}>{n} × 7 ＝ {n * 7}</div>
              <div className={classes.formula}>{n} × 8 ＝ {n * 8}</div>
              <div className={classes.formula}>{n} × 9 ＝ {n * 9}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

GridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridList);
