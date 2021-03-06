// 注意这里我们除了从antd中引入了Layout布局组件，还引入了Menu菜单组件，Icon图标组件

import { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import Link from 'umi/link';
import Footer from './Footer';

const { Header, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu; 

export default class BasicLayout extends Component {
  

  render() {
    return (
      
      <Layout>
        
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>         
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span> <Link to="/hello" style={{color:'#fff'}}>后台首页</Link></span>
              </Menu.Item>
                  
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
               <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
               <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
               <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>           
          </Menu>
        </Sider>



        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          {/* 文本类容 */}
          <Content style={{ margin: '24px 16px 0' }}>
          {/* 面包屑导航 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        
          <Footer/>
        </Layout>


      </Layout>
    )
  }
}
