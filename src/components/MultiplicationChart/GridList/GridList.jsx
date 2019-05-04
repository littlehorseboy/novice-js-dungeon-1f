import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

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
        <div className={classes.grid}>
          <div className={classes.gridContent}>
            <div className={classes.titleNumber}>2</div>
            <div className={classes.formula}>2 × 1 ＝ 2</div>
            <div className={classes.formula}>2 × 2 ＝ 4</div>
            <div className={classes.formula}>2 × 3 ＝ 6</div>
            <div className={classes.formula}>2 × 4 ＝ 8</div>
            <div className={classes.formula}>2 × 5 ＝ 10</div>
            <div className={classes.formula}>2 × 6 ＝ 12</div>
            <div className={classes.formula}>2 × 7 ＝ 14</div>
            <div className={classes.formula}>2 × 8 ＝ 16</div>
            <div className={classes.formula}>2 × 9 ＝ 18</div>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridContent}>
            <div className={classes.titleNumber}>2</div>
            <div className={classes.formula}>2 × 1 ＝ 2</div>
            <div className={classes.formula}>2 × 2 ＝ 4</div>
            <div className={classes.formula}>2 × 3 ＝ 6</div>
            <div className={classes.formula}>2 × 4 ＝ 8</div>
            <div className={classes.formula}>2 × 5 ＝ 10</div>
            <div className={classes.formula}>2 × 6 ＝ 12</div>
            <div className={classes.formula}>2 × 7 ＝ 14</div>
            <div className={classes.formula}>2 × 8 ＝ 16</div>
            <div className={classes.formula}>2 × 9 ＝ 18</div>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridContent}>
            <div className={classes.titleNumber}>2</div>
            <div className={classes.formula}>2 × 1 ＝ 2</div>
            <div className={classes.formula}>2 × 2 ＝ 4</div>
            <div className={classes.formula}>2 × 3 ＝ 6</div>
            <div className={classes.formula}>2 × 4 ＝ 8</div>
            <div className={classes.formula}>2 × 5 ＝ 10</div>
            <div className={classes.formula}>2 × 6 ＝ 12</div>
            <div className={classes.formula}>2 × 7 ＝ 14</div>
            <div className={classes.formula}>2 × 8 ＝ 16</div>
            <div className={classes.formula}>2 × 9 ＝ 18</div>
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.gridContent}>
            <div className={classes.titleNumber}>2</div>
            <div className={classes.formula}>2 × 1 ＝ 2</div>
            <div className={classes.formula}>2 × 2 ＝ 4</div>
            <div className={classes.formula}>2 × 3 ＝ 6</div>
            <div className={classes.formula}>2 × 4 ＝ 8</div>
            <div className={classes.formula}>2 × 5 ＝ 10</div>
            <div className={classes.formula}>2 × 6 ＝ 12</div>
            <div className={classes.formula}>2 × 7 ＝ 14</div>
            <div className={classes.formula}>2 × 8 ＝ 16</div>
            <div className={classes.formula}>2 × 9 ＝ 18</div>
          </div>
        </div>
      </div>
    );
  }
}

GridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridList);
