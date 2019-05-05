import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {
  firstGrid: {
    minWidth: 350,
    minHeight: 366,
    marginBottom: 40,
    display: 'flex',
  },
  firstGridDecoration: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: 24,
    color: '#2EB738',
  },
  firstGridContainer: {
    width: '100%',
    padding: '14px 16px',
  },
  firstGridContent: {
    height: '100%',
    borderTop: '1px solid #2EB738',
    borderBottom: '1px solid #2EB738',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > .title': {
      fontSize: 56,
      fontWeight: 'bold',
      color: '#2EB738',
    },
    '& > .subTitle': {
      fontSize: 24,
      lineHeight: '36px',
      color: '#2EB738',
    },
  },
};

class FirstGrid extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.firstGrid}>
        <div className={classes.firstGridDecoration}>
          <div>×</div>
          <div>×</div>
        </div>
        <div className={classes.firstGridContainer}>
          <div className={classes.firstGridContent}>
            <div className="title">九九乘法表</div>
            <div className="subTitle">MULTIPLICATION CHART</div>
          </div>
        </div>
        <div className={classes.firstGridDecoration}>
          <div>×</div>
          <div>×</div>
        </div>
      </div>
    );
  }
}

FirstGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FirstGrid);
