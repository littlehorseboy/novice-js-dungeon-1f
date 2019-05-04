import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Footer from '../../components/MultiplicationChart/Footer/Footer.jsx';

const styles = {
  root: {
    width: 1280,
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

class MultiplicationChart extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Footer />
      </div>
    );
  }
}

MultiplicationChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiplicationChart);
