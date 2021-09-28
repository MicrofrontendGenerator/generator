import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';

class Navbar extends PureComponent {
  state = {
    current: 'dashboard',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Link to="/">
          <Menu.Item key="dashboard" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
        </Link>

        <Link to="/microfrontend">
          <Menu.Item key="microfrontend" icon={<AppstoreOutlined />}>
            Microfrontend as Route
          </Menu.Item>
        </Link>

        <Link to="/static">
          <Menu.Item key="static">Static</Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default Navbar;
