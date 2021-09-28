import React, { PureComponent } from 'react';

class MicroFrontend extends PureComponent {
  componentDidMount = async () => {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    const fetchedMicrofrontend = await fetch(`${host}/asset-manifest.json`);
    const manifest = await fetchedMicrofrontend.json();
    const script = document.createElement('script');
    script.id = scriptId;
    script.crossOrigin = '';
    script.src = `${host}${manifest['main.js']}`;
    script.onload = this.renderMicroFrontend;
    document.head.appendChild(script);
  }

  componentWillUnmount = () => {
    const { name } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, history } = this.props;

    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    const { name } = this.props;
    return <main id={`${name}-container`} />;
  }
}

export default MicroFrontend;
