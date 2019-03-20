import React, { Children } from 'react';
// import { Layout } from 'antd';
// import { connect } from 'dva';
// import Media from 'react-media';
// import Header from './Header';
// import logo from '../assets/yay.jpg';

// const { Content } = Layout;

// class BasicLayout extends React.Component {
//   componentDidMount() {
//     const {
//       dispatch,
//       route: {
//         routes
//       }
//     } = this.props;
//     dispatch({
//       type: 'menu/getMenuData',
//       payload: { routes }
//     })
//   }

//   getContext() {
//     const { location, breadcrumbNameMap } = this.props;
//     return {
//       location,
//       breadcrumbNameMap
//     }
//   }

//   render() {
//     const {
//       menuData,
//       breadcrumbNameMap,
//       menu,
//       location: { pathname },
//       children
//     } = this.props;

//     const layout = (
//       <Layout>
//         <Layout>
//           <Header
//             menuData={menuData}
//             logo={logo}
//             {...this.props}
//           />
//           <Content>
//             {children}
//           </Content>
//         </Layout>
//       </Layout>
//     )

//     return (
//       <React.Fragment>
//         {console.log(breadcrumbNameMap)}
//         {console.log('123')}
//         {layout}
//       </React.Fragment>
//     )
//   }
// }


// export default connect(({ menu: menuModel, menu }) => ({
//   menuData: menuModel.menuData,
//   breadcrumbNameMap: menuModel.breadcrumbNameMap,
//   menu,
// }))(props => (
//   <Media query="(max-width: 599px)">
//     {<BasicLayout {...props} />}
//   </Media>
// ));

class BasicLayout extends React.Component{
  render(){
    return(
      <div>
        123
        {this.props.children}
      </div>
    )
  }
}

export default BasicLayout