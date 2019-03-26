import styles from './about.css';
import React from 'react';
import { Card, Row, Col, Table } from 'antd'

const imgUrl = [
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/1.jpg',
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/2.jpg',
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/3.jpg',
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/4.jpg',
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/5.jpg',
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/6.jpg',
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/7.jpg',
    'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/8.jpg',
]

const photos = [
    {
        src: imgUrl[0],
        description: '公司总经理唐国宏在2018年会上致新年贺词！',
    },
    {
        src: imgUrl[1],
        description: '公司员工在2018年年会晚宴中。',
    },
    {
        src: imgUrl[2],
        description: '公司2018年年会邀请了湖南省著名山水画家谭红专先生作画。',
    },
    {
        src: imgUrl[3],
        description: '公司2018年年会邀请了2017中国原创歌曲金奖获得者汪兴旺先生献唱。',
    },
    {
        src: imgUrl[4],
        description: '公司员工李雨龙献唱。',
    },
    {
        src: imgUrl[5],
        description: '公司软件开发部工作室。',
    },
    {
        src: imgUrl[6],
        description: '软件开发部邓工程师在认真工作。',
    },
    {
        src: imgUrl[7],
        description: '工程师们在工作室探讨问题。！',
    },
]

const { Meta } = Card;


//使用表格

class About extends React.Component {
    render() {
        const imgCard = ({ index, imgSrc, description }) => (
            <Card
                hoverable={true}
                style={{ width: 240 }}
                cover={<img alt='员工相册' src={imgSrc} />}
                key={index}
            >
                <Meta
                    description={description}
                />
                {description}
            </Card>
        )
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <h1 style={{ fontSize: '3em' }}>公司相册</h1>
                <Row gutter={16}>
                    <Col span={8}>
                        {
                            photos.map((item, index) => {
                                imgCard({ index, imgSrc: item.src, description: item.description });
                            })
                        }
                    </Col>
                </Row>
                {
                    photos.map((item, index) => (
                        <Card
                            hoverable={true}
                            style={{ width: 320, margin: '16px 16px', display: 'inline-block' }}
                            cover={<img alt='员工相册' src={item.src} />}
                            key={index}
                            bordered={false}
                        >
                            <Meta
                                description={item.description}
                            />
                        </Card>
                    ))
                }
            </div>
        )
    }
}

export default About;