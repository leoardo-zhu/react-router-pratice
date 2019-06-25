import React from 'react'
import { Modal, Icon, Upload } from 'antd';

class ModifyAvatar extends React.Component {
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
                    width={300}
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

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}


const UploadAvatar = class extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload>
        );
    }

}

export default ModifyAvatar