import React, { Component } from 'react';
import { Layout, message } from 'antd';
import Animate from 'rc-animate';
import { connect } from 'dva';

import TopNavHeader from '@/components/TopNavHeader';

const { Header } = Layout;

class HeaderView extends Component {
    render() {
        const HeaderDom = (
            <Header>
                <TopNavHeader
                    mode='horizontal'
                    {...this.props}
                />
            </Header>
        )
        return (
            <Animate component="" transitionName="fade">
                {HeaderDom}
            </Animate>
        )
    }
}

export default connect(({ global }) => ({ global }))(HeaderView)