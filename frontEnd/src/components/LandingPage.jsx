import React from 'react';
import {  Button, Layout, Radio } from 'antd';
import "./landingpage.css"

const { Header, Footer, Sider, Content } = Layout;


// flex: 1, // Add this property to take up the remaining space

export default function LandingPage(){



    return(
        
        <div className="container">
        <div className="left-half">Left Half</div>
        <div className="right-half"><Button type="dashed" size="large">
            Login
          </Button>
          <Button type="dashed" size="large">
            SignUp
          </Button></div>
      </div>
     
      )
}