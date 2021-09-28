import React, { Component } from 'react';

import Config from './Config';

class StaticFrontend extends Component {
  state = {
    staticContent: ''
  };

  getStaticContent = async () => {
    const url = Config.contentHost;
    const fetchedData = await fetch(`${url}/static.json`);
    const { data: staticContent } = await fetchedData.json();
    this.setState({ staticContent });
  };

  componentDidMount = async () => {
    await this.getStaticContent();
  };

  render() {
    return <>{this.state.staticContent}</>;
  }
}

export default StaticFrontend;
