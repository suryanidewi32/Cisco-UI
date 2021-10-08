import React from "react"
import Gap from '../../Component/Gap/Gap'
import Assurance from '../../Component/Assurance/Assurance'
import Network from './../../Component/Network/Network';
import Configuration from "../../Component/Configuration/Configuration";
import Tools from "../../Component/Tools/Tools";
import './Home.css';
import { Layout, Menu, Card} from 'antd';
import {
  SearchOutlined,
  TableOutlined,
  SettingOutlined,
  ChromeOutlined,
  BarsOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';


const { Header, Content} = Layout;

const Home = () => {
  return (
    <Layout>

    <Gap height={10}/>

    <Header style={{ position: 'fixed', zIndex: 1, boxShadow:"0px 1px 2px #d7d9da", height:85}}>
     <div className="page1">
     <div className="logo"> 
     <p style={{marginBottom:'-7px', marginRight:'6px', fontSize:'20px', fontWeight:'bold', color:'#049fd9'}}>Cisco</p>
     <div>&nbsp;</div>
     <p style={{letterSpacing:'1px', fontSize:'19px', fontWeight:'500', color:'#049fd9'}}>DNA Center</p>
     </div>

      <Menu theme="dark" mode="horizontal" style={{marginLeft: 20}}>
        <Menu.Item key="1">DESIGN</Menu.Item>
        <Menu.Item key="2">POLICY</Menu.Item>
        <Menu.Item key="3">PROVISION</Menu.Item>
        <Menu.Item key="4">ASSURANCE</Menu.Item>
        </Menu>

        <Menu theme="dark" mode="horizontal" style={{marginLeft: 350 }}>
        <Menu.Item key="5" icon={<SearchOutlined />}></Menu.Item>
        <Menu.Item key="6" icon={<TableOutlined />}></Menu.Item>
        <Menu.Item key="7" icon={<SettingOutlined />}></Menu.Item>
        <Menu.Item key="8" icon={<ChromeOutlined />}></Menu.Item>
        <Menu.Item key="9" icon={<BarsOutlined />}></Menu.Item>
      </Menu>

      </div>
    </Header>

    <Gap height={40}/>

    <Content className="site-layout" style={{width:'100px', marginTop: 64 }}>
      
      <div className="card-group2">
        <h1 style={{fontStyle:'normal', color: '#39393b', letterSpacing: '1px', fontWeight: '200px', fontSize:'24px', lineHeight:'1.25', marginLeft:'50px', fontStretch:'normal'}}>Welcome, </h1> 
        <div>&nbsp;&nbsp;</div> 
        <h1 style={{lineHeight:'1.25', color: '#049fd9', letterSpacing: '1px', fontWeight: '200px', fontSize:'24px'}}>devnetuser</h1>
        <Menu theme="dark" mode="horizontal" style={{marginLeft: 730 }}>
        <Menu.Item  style={{letterSpacing:'1px', fontSize:'15px', fontWeight:'400', color:'#049fd9'}}>Take a Tour</Menu.Item>
        <Menu.Item style={{letterSpacing:'1px', fontSize:'15px', fontWeight:'400', color:'#049fd9'}} icon={<PlayCircleOutlined />}>Learn More</Menu.Item>
        </Menu>
      </div>
    
      <div className="site-layout-background" style={{minHeight: 380 }}>
      <Gap height={30}/>
      <Card style={{ width: 1348, border:0, boxShadow:"0px 1px #d7d9da"}}>
      <Assurance/>
      </Card>
      <Gap height={1}/>
      <Card style={{ width: 1348, border:0, boxShadow:"0px 1px #d7d9da"}}>
      <Network/>
      </Card>
      <Gap height={1}/>
      <Card style={{ width: 1348, border:0, boxShadow:"0px 1px #d7d9da"}}>
      <Configuration/>
      </Card>
      <Gap height={1}/>
      <Card style={{ width: 1348, border:0, boxShadow:"0px 1px #d7d9da"}}>
      <Tools/>
      </Card>
      </div>
    </Content>

    </Layout>
  )
}
export default Home;