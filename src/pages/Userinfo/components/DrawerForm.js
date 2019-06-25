import React from 'react'
import { Drawer, Form, Button, Input, DatePicker, Radio, message } from 'antd'

import { updateUserInfoApi } from '../../../api/api'
import store from '../../../stores/store'
import moment from 'moment'


class DrawerForm extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: false,
            ...store.getState()
        }
        store.subscribe(this.changeUserInfo)
    }

    changeUserInfo = () => this.setState({ ...store.getState() })

    showDrawer = () => {
        this.setState({
            visible: true
        })
    }

    onClose = () => {
        this.setState({ visible: false })
    }

    onSubmit = () => {
        const { validateFields, getFieldsValue } = this.props.form

        const userInfo = { ...this.state.user, ...getFieldsValue() }


        const action = {
            type: 'change_userInfo',
            value: {
                ...userInfo,
                birthday: userInfo.birthday.format('YYYY-MM-DD')
            }
        }

        validateFields(err => {
            if (!err) {
                updateUserInfoApi(userInfo)
                    .then(() => {
                        this.onClose()
                        store.dispatch(action)
                        message.success('修改信息成功！')
                    }
                    ).catch(err => message.error(err.message))
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { user } = this.state
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 }
        }
        return (
            <div>
                <a href="javascript:void(0)" className="edit-info" onClick={this.showDrawer}>
                    修改资料
                </a>
                <Drawer
                    title="修改资料"
                    width={350}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    maskClosable={false}
                >
                    <Form {...formItemLayout}>
                        <Form.Item label='账号'>
                            <span className='ant-form-text'>{user.username}</span>
                        </Form.Item>
                        <Form.Item label='手机号'>
                            <span className='ant-form-text'>{user.mobile}</span>
                        </Form.Item>
                        <Form.Item label='昵称'>
                            {getFieldDecorator('nickname', {
                                initialValue: user.nickname,
                                rules: [
                                    {
                                        required: true,
                                        message: '昵称是必须要填的喔'
                                    }
                                ]
                            })(<Input autoComplete='off' />)
                            }
                        </Form.Item>
                        <Form.Item label='性别'>
                            {getFieldDecorator('sex', { initialValue: user.sex || 3 })(
                                <Radio.Group>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                    <Radio value={3}>保密</Radio>
                                </Radio.Group>
                            )
                            }
                        </Form.Item>
                        <Form.Item label='邮箱'>
                            {getFieldDecorator('email', {
                                initialValue: user.email,
                                rules: [
                                    {
                                        type: 'email',
                                        message: '请输入正确的邮箱格式'
                                    }
                                ]
                            })(<Input autoComplete='off' />)
                            }
                        </Form.Item>
                        <Form.Item label='生日'>
                            {getFieldDecorator('birthday', { initialValue: moment(user.birthday) })(<DatePicker />)}
                        </Form.Item>
                        <Form.Item label='职业'>
                            {getFieldDecorator('job', { initialValue: user.job })(<Input autoComplete='off' />)}
                        </Form.Item>
                        <Form.Item label='地址'>
                            {getFieldDecorator('address', { initialValue: user.address })(
                                <Input.TextArea autosize={{ minRows: 2, maxRows: 6 }} />)
                            }
                        </Form.Item>
                    </Form>
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            取消
                        </Button>
                        <Button onClick={this.onSubmit} type="primary">
                            保存
                        </Button>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default DrawerForm