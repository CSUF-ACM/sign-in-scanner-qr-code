import React from 'react'
import { Card, Avatar, Typography, Space } from 'antd';
import { CommentOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';

class EventCard extends React.Component {
   render () {
       return (
            <Card
                hoverable
                size='small'
                style={{ width: 700 }}
            >
                <Space>
                    <Avatar size='small' />
                    <Typography.Text>Organization Name</Typography.Text>
                </Space>

                <div style={{'padding-top':'5px', 'padding-bottom': '10px'}}>
                    <img style={{float:'right', 'padding-left':'10px'}}
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <Typography.Title level={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Typography.Title>
                </div>

                <Space size='large'>
                    <span><CommentOutlined key="comments"/> 253 </span>
                    <span><ShareAltOutlined key="share" /> 43 </span>
                    <StarOutlined key="save" />
                </Space>

            </Card>
    )};
}

export default EventCard