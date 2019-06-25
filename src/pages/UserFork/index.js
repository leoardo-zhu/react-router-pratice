import React from 'react'

import { getUserWatchApi } from '../../api/api'
import './style.scss'
import { List, Icon, Avatar, Empty } from 'antd';

const listData = [];
for (let i = 0; i < 15; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part Index ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default class UserFork extends React.Component {

    render() {
        return (
            <div className="user-fork">
                <div className="title">
                    我的收藏
                </div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 2,
                    }}
                    dataSource={listData}
                    footer={
                        <div>
                            <b>ant design</b> footer part
      </div>
                    }
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="star-o" text="156" />,
                                <IconText type="like-o" text="156" />,
                                <IconText type="message" text="2" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        )


    }
}