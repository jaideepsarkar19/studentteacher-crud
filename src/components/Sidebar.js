import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
  
} from '@ant-design/icons';
import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import StudentsTable from './Studentstable';
import { Layout, Menu, theme , Typography} from 'antd';
import Home from './Home';
import TeachersTable from './TeachersTable';
import FormFill from './Form';
import Provider from '../Provider';
const { Header, Sider, Content } = Layout;
const { Title} = Typography;


const Sidebar = () => {
  const navigate=useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {green },
  } = theme.useToken();

  return (
    <Layout>
      <Provider>
      <Sider collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="light"
        
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'Home',
              onClick:(()=>navigate('/')),
            },
            {
              key: '2',
              label: 'Students',
              onClick:(()=>navigate('/students')),
            },
            {
              key: '3',
              label: 'Teachers',
              onClick:(()=>navigate('/teachers')),
            },
            {
              key: '4',
              label: 'Add',
              onClick:(()=>navigate('/form')),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background:'green',
            display:'flex'
          }}
        >
            <div className='headertab'>
                
                 {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                     className: 'trigger',
                     onClick: () => setCollapsed(!collapsed),
                   })}
            </div>
            <div style={{width:'100%' ,display:'flex',justifyContent:'centre',alignItems:'center',marginRight:'100px'}}>
                <Title className='title'>Student - Teacher- CRUD Operations </Title>
            </div>
        </Header>
          
        <Content
          style={{
            margin: '22px 14px',
            padding: 20,
            minHeight: 280,
            background: "green",
            overflow:'scroll'
          }}
        >
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/students' element={<StudentsTable/>}/>
                <Route path='/teachers' element={<TeachersTable/>}/>
                <Route path='/form/' element={<FormFill />}/>
             </Routes>
        </Content>
      </Layout></Provider>
    </Layout>
  );
};
export default Sidebar;