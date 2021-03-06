import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Banner from './Banner'
import User from './User'


export default class Nav extends Component {
  render() {
    return (
      <div>
        <h1>导航菜单</h1>
        <Link to={`${this.props.match.path}/banner`}> 轮播图信息 </Link> |
        <Link to={`${this.props.match.path}/user`}> 用户管理 </Link> |

        <Route path={`${this.props.match.path}/banner`} component={Banner} />
        <Route path={`${this.props.match.path}/user`} component={User} />
      </div>
    )
  }
}
