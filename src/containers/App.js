import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import UserInfo from '../pages/Userinfo'
import UserFork from '../pages/UserFork'
import UserWatch from '../pages/UserWatch'
import './App.scss'
import { Breadcrumb, Menu, Icon, Divider } from "antd";


export default function App() {

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <a href="http://47.101.39.237/">首页</a>
    </Breadcrumb.Item>,
    <Breadcrumb.Item key="user">
        用户
    </Breadcrumb.Item>
  ]

  return (
    <Router basename='/user'>
      <div className="wrapper">
        {/* 头部导航 */}
        <header>
          <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </header>
        {/* 双列布局  */}
        <div className="content">
          {/* 左侧边导航栏 */}
          <div className="left-menu">
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
            >
              <Menu.Item key="1">
                <NavLink exact to='/'><Icon type="home" />个人资料</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to='/fork'><Icon type="fork" />我的收藏</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to='/watch'><Icon type="heart" />我的关注</NavLink>
              </Menu.Item>
              <Divider orientation='left'>未开发部份</Divider>
              <Menu.Item key="4">
                <Icon type="user" />我的博客
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="download" />我的下载
              </Menu.Item>
            </Menu>

          </div>

          <div className="right-menu">
            <Route exact path='/' component={UserInfo} />
            <Route path='/fork' component={UserFork} />
            <Route path='/watch' component={UserWatch} />
          </div>
        </div>
      </div>
    </Router >
  )
}