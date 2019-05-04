import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import GridList from '../../components/MultiplicationChart/GridList/GridList.jsx';
import Footer from '../../components/MultiplicationChart/Footer/Footer.jsx';

const styles = {
  root: {
    width: 1280,
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

class MultiplicationChart extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <GridList />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

MultiplicationChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiplicationChart);
