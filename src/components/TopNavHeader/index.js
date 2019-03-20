import React, { PureComponent } from 'react';
import Link from 'umi/link';
import BaseMenu from '../SiderMenu/BaseMenu';
import { getFlatMenuKeys } from '../SiderMenu/SiderMenuUtils';
import styles from './index.less';

export default class TopNavHeader extends PureComponent {
    state = {
        maxWidth: undefined
    }

    static getDerivedStateFromProps(props) {
        return {
            maxWidth:
                (props.contentWidth === 'Fixed' && window.innerWidth > 1200 ? 1200 : window.innerWidth) -
                280 -
                120 -
                40,
        };
    }

    render() {
        const { menuData, logo } = this.props;
        const { maxWidth } = this.state;
        const flatMenuKeys = getFlatMenuKeys(menuData);
        return (
            <div className={`${styles.head} ${styles.light}`}>
                <div className={styles.left}>
                    <div className={styles.logo} key="logo" id="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <h1>官网</h1>
                        </Link>
                    </div>
                    <div
                        style={{
                            maxWidth,
                        }}
                    >
                        <BaseMenu {...this.props} flatMenuKeys={flatMenuKeys} className={styles.menu} />
                    </div>
                </div>
            </div>
        )
    }
}