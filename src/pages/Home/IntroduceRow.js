import React, { memo } from 'react';
import { Row, Col, Icon, Card } from 'antd';

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
};

const IntroduceRow = memo(({ loading, visiData }) => (
    <Row gutter={34}>
        <Col {...topColResponsiveProps}>
            <Card title={visiData[0].title} bordered={false} loading={loading}>{visiData[0].content}</Card>
        </Col>
        <Col {...topColResponsiveProps}>
            <Card title={visiData[1].title} bordered={false} loading={loading}>{visiData[1].content}</Card>
        </Col>
        <Col {...topColResponsiveProps}>
            <Card title={visiData[2].title} bordered={false} loading={loading}>{visiData[2].content}</Card>
        </Col>
    </Row>
));

export default IntroduceRow;