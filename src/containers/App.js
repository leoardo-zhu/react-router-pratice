import React from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import UserInfo from '../components/UserInfo'
import UserFork from '../components/UserFork'
import UserWatch from '../components/UserWatch'
import './App.scss'


export default function App() {
  return (
    <Router basename='/user'>
      <div className="wrapper">
        {/* 头部导航 */}
        <header>
          <div className="header-container">
            <a href='http://47.101.39.237'>首页</a>
          </div>
        </header>
        {/* 双列布局  */}
        <div className="content">
          {/* 左侧边导航栏 */}
          <div className="left-menu">
            <ul>
              <li>
                <NavLink exact to='/' activeClassName='active'>个人资料</NavLink>
              </li>
              <li>
                <NavLink to='/fork' activeClassName='active'>我的收藏</NavLink>
              </li>
              <li>
                <NavLink to='/watch' activeClassName='active'>我的关注</NavLink>
              </li>

              <li>
                <NavLink to='#' activeClassName='active'>我的博客</NavLink>
              </li>
              <li>
                <NavLink to='#' activeClassName='active'>我的下载</NavLink>
              </li>
            </ul>
          </div>

          <div className="right-menu">
            <Route exact path='/' component={UserInfo} />
            <Route path='/fork' component={UserFork} />
            <Route path='/watch' component={UserWatch} />
          </div>
        </div>
      </div>
    </Router>
  )
}