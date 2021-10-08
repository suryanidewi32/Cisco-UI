import './Tools.css';
import { Card} from 'antd';
import Gap from '../Gap/Gap';

const Tools=()=> {
    return (
   <header style={{padding: 24}}>

   <div>
   <p style={{color:'#39393b', fontFamily:'CiscoSans', letterSpacing:'.67px', fontWeight: '200px', fontSize:'24px',lineHeight:'30px', marginRight:'34px'}}> Tools 
   </p>
   </div>
   
   <Gap height={20}/>
   
   <div className="page2">
    
    <div>
    <Card style={{ width: 300, border:'1px solid #d7d9d', padding:'20px 24px 24px' }}>
      <p style={{color:'#049fd9', fontSize:'14px'}}>Discovery</p>
      <p style={{color:'#58585b', fontSize:'12px'}}>Automate addition of devices to controller inventory</p>
      <Gap height={20}/>
    </Card>
    </div>
    
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
    <div>
    <Card style={{ width: 300,border:'1px solid #d7d9d',padding:'20px 24px 24px' }}>
      <p style={{color:'#049fd9', fontSize:'14px'}}>Topology</p>
      <p style={{color:'#58585b', fontSize:'12px'}}>Visualize how devices are interconnected and how they communicate</p>
    </Card>
    </div>
    
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
    <div>
    <Card style={{ width: 300,border:'1px solid #d7d9d',padding:'20px 24px 24px' }}>
      <p style={{color:'#049fd9', fontSize:'14px'}}>Command Runner</p>
      <p style={{color:'#58585b', fontSize:'12px'}}>Allows you to run diagnostic CLIs against one or more devices</p>
       <Gap height={20}/>
    </Card>
    </div>
    
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
    <div>
    <Card style={{ width: 300,border:'1px solid #d7d9d',padding:'20px 24px 24px' }}>
      <p style={{color:'#049fd9', fontSize:'14px'}}>License Manager</p>
      <p style={{color:'#58585b', fontSize:'12px'}}>Visualize and manage license usage</p>
       <Gap height={40}/>
    </Card>
    </div>
   </div>
   
   <Gap height={20}/>
   <div className="page2">
    
    <div>
    <Card style={{ width: 300,border:'1px solid #d7d9d',padding:'20px 24px 24px' }}>
      <p style={{color:'#049fd9', fontSize:'14px'}}>Template Editor</p>
      <p style={{color:'#58585b', fontSize:'12px'}}>An interactive editor to author CLI templates</p>
    </Card>
    </div>
    
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
    <div>
    <Card style={{ width: 300,border:'1px solid #d7d9d',padding:'20px 24px 24px' }}>
      <p style={{color:'#049fd9', fontSize:'14px'}}>Network Telemetry</p>
      <p style={{color:'#58585b', fontSize:'12px'}}>Network Telemetry Design and Provision</p>
    </Card>
    </div>
   </div>
 
  </header>
    );
  }
  
  export default Tools;