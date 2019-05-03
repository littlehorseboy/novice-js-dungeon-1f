import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import jss from 'jss';
import preset from 'jss-preset-default';
import normalize from 'normalize-jss';
import 'core-js/features/promise';
import 'core-js/features/array/find';
import 'core-js/features/object/assign';
import 'core-js/features/weak-map';
import MultiplicationChart from './pages/MultiplicationChart/MultiplicationChart.jsx';

jss.setup(preset());
jss.createStyleSheet(normalize).attach();

const styles = {
  root: {
    fontFamily: 'system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
  },
};

class Root extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MultiplicationChart />
      </div>
    );
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Root);
