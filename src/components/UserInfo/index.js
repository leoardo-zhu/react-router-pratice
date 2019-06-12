import React, { Component } from 'react'
import { uploadAvatarApi } from './api'
import './style.scss'
import { Modal, Icon } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';

export default class UserInfo extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='user-info'>
                <div className="title">
                    个人资料
                </div>
                <div className="info">
                    <div className="photo">
                        <img src="https://i.loli.net/2019/06/09/5cfca41fb3aa192172.png" alt="用户头像" />
                        <ModifyAvatar />
                    </div>
                    <div className="user">
                        <p>ID</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                        <p>积分</p>
                    </div>
                </div>
            </div>

        )
    }
}



const ModifyAvatar = class extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }
    }
    modify = () => {

    }
    render() {
        const { visible } = this.state
        return (
            <div className="avatar">
                <a href='javascript:void(0)' onClick={() => this.setState({ visible: true })}>修改头像</a>
                <Modal
                    visible={visible}
                    onCancel={() => this.setState({ visible: false })}
                    cancelText='取消'
                >
                    <UploadAvatar />
                </Modal>
            </div>

        )
    }
}

const UploadAvatar = class extends Component {
    state = {
        fileList: [],
        uploading: false,
    }

    handleUpload = () => {
        const { fileList } = this.state
        const formData = new FormData()
        formData.append('smfile', fileList[0])

        uploadAvatarApi()
    }


    render() {
        return (
            <Dragger>
                <p className='ant-upload-drag-icon'>
                    <Icon type='inbox' />
                </p>
                <p className="ant-upload-text">点击或拖动图片至此处</p>
                <p className="ant-upload-hint">
                    图片宽度至少为100*100像素，大小不超过4MB
                </p>
            </Dragger>
        )
    }
}
