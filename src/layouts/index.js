import styles from './index.css';

import { Layout, Menu } from 'antd';
import Link from "umi/link";

const { Header, Content, Sider, Footer } = Layout;

const menuData = [
  { route: 'home', name: '首页' },
  { route: 'mainBusiness', name: '主营业务' },
  { route: 'news', name: '新闻资讯' },
  { route: 'successfulCases', name: '成功案例' },
  { route: 'about', name: '关于翔鹏' },
  { route: 'contact', name: '联系我们' },
]

function BasicLayout(props) {
  return (
    <Layout>
      <Header>
        <Menu
          theme='light'
          mode='horizontal'
          style={{ lineHeight: '64px' }}
        >
          {
            menuData.map(menu => (
              <Menu.Item key={`/${menu.name}`}>
                <Link to={`${menu.route}`}>{menu.name}</Link>
              </Menu.Item>
            ))
          }
        </Menu>
      </Header>
    </Layout>
  );
}

export default BasicLayout;
