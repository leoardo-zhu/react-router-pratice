import React from 'react'

import { Form, Avatar } from 'antd';
import DrawerForm from './components/DrawerForm'
import ModifyAvatar from './components/Avatar'
import store from '../../stores/store'

import { getUserInfoApi } from '../../api/api'

import './style.scss'

export default class UserInfo extends React.Component {
    constructor() {
        super()
        this.state = store.getState()
        store.subscribe(this.changeUserInfo)
    }

    componentDidMount() {
        getUserInfoApi().then(response => {
            const user = { user: response.data }
            const action = {
                type: 'set_userInfo',
                value: user
            }
            store.dispatch(action)
            this.setState(user)
        })
    }

    changeUserInfo = () => {
        this.setState(store.getState())
    }

    render() {
        const { user } = this.state

        const Drawer = Form.create()(DrawerForm)

        let sex = '保密'

        if (user.sex === 1) sex = '男'
        else if (user.sex === 2) sex = '女'

        return (
            <div className='user-info'>
                <div className="title">
                    个人资料
                </div>
                <div className="info">
                    <div className="photo">
                        <Avatar size={100} src={user.avatar} />
                        <ModifyAvatar />
                    </div>
                    <div className="user">
                        <Drawer />
                        <p>账号：{user.username}</p>

                        <p>手机号：{user.mobile}</p>

                        <p>昵称：{user.nickname}</p>

                        <p>性别：{sex}</p>

                        <p>邮箱：{user.email || '未设置'}</p>

                        <p>生日：{user.birthday || '未设置'}</p>

                        <p>职业：{user.job || '未设置'}</p>

                        <p>地址：{user.address || '未设置'}</p>

                    </div>
                </div>
            </div>

        )
    }
}




