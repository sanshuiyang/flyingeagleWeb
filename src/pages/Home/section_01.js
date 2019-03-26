import React from 'react';
import { Card, Row, Col } from 'antd';

const cardData = {
    title: {
        textAlign: 'center',
        content: '主要的业务范围'
    },
    content: [
        {
            rol: 'left',
            title: {
                textAlign: 'left',
                content: '虚拟漫游'
            },
            bordered: false,
            content: "虚拟漫游，是虚拟现实(VR)技术的重要分支，在建筑、旅游、游戏、航空航天、医学等多种行业发展很快。由于有可贵的3I特性–沉浸感、交互性和构想性，使得沿用固定漫游路径等手段的其他漫游技术和系统无法与之相比。"
        },
        {
            rol: 'left',
            title: {
                textAlign: 'left',
                content: '虚拟装配'
            },
            bordered: false,
            content: "基于虚拟现实的产品虚拟拆装技术在新产品开发、产品的维护以及操作培训方面具有独特的作用。在交互式虚拟装配环境中，用户使用各类交互设备，像在真实环境中一样对产品的零部件进行各类装配操作，从而使得用户能够对产品的可装配性进行分析、对产品零部件装配序列进行验证和规划、对装配操作人员进行培训等。"
        },
        {
            rol: 'right',
            title: {
                textAlign: 'left',
                content: '虚拟演练'
            },
            bordered: false,
            content: "演练系统提供针对不同角色进行训练的功能。根据登陆的不同角色，系统提供不同的能力和权限。 根据在应对灾害时职责和所需能力的不同，角色主要包括以下几类：群众、社会救援力量、现场专业救援力量，指挥中心等。"
        },
        {
            rol: 'right',
            title: {
                textAlign: 'left',
                content: '虚拟全景展示'
            },
            bordered: false,
            content: "全方位，全面的展示了双360度球型范围内的所有景致；可在例子中用鼠标左键按住拖动，观看场景的各个方向；实景，真实的场景，三维全景大多是在照片基础之上拼合得到的图像，最大限度的保留了场景的真实性。"
        }
    ]
}

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
};

class section extends React.PureComponent {
    render() {
        const cardTitle = ({ textAlign, content }) => (
            <h3 style={{ textAlign: `${textAlign}` }}>{content}</h3>
        );

        const ColCard = ({ title, content, bordered }) => (
            <Card
                title={
                    cardTitle({
                        textAlign: title.textAlign,
                        content: title.content
                    })
                }
                key={title.content}
                bordered={bordered}
            >
                {content}
            </Card>
        )

        return (

            <div>
                <hr />
                <Card
                    title={cardTitle(cardData.title)}
                >
                    <Row gutter='24'>
                        <Col {...topColResponsiveProps} style={{ width: '350px',display:'inline-block' }}>
                            {
                                cardData.content.map(item => {
                                    if (item.rol === 'left') {
                                        return ColCard(item);
                                    }
                                })
                            }
                        </Col >
                        <Col {...topColResponsiveProps} style={{ float: 'right', width: '350px' }}>
                            {
                                cardData.content.map(item => {
                                    if (item.rol === 'right') {
                                        return ColCard(item);
                                    }
                                })
                            }
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default section;