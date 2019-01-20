import React, {Component} from 'react';
import {node} from 'prop-types';
import LayoutPresentational from './presentational';

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
      <LayoutPresentational navigationOpen={navigationOpen} onNavigationDrawerToggle={this.navigationToggleHandler}>
        {children}
      </LayoutPresentational>
    );
  }
}

LayoutContainer.propTypes = {
  children: node.isRequired
};
