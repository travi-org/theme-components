import React, {Component} from 'react';
import {node} from 'prop-types';
import Layout from './presentational';

export default class LayoutContainer extends Component {
  state = {navigationOpen: false};

  navigationToggleHandler = () => {
    const {navigationOpen} = this.state;

    this.setState({navigationOpen: !navigationOpen});
  };

  render() {
    const {children} = this.props;
    const {navigationOpen} = this.state;

    return (
      <Layout navigationOpen={navigationOpen} onNavigationDrawerToggle={this.navigationToggleHandler}>
        {children}
      </Layout>
    );
  }
}

LayoutContainer.propTypes = {
  children: node.isRequired
};
