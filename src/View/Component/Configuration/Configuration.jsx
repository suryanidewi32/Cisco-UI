import './Configuration.css';
import { Card} from 'antd';
import Gap from '../Gap/Gap';
import { Link } from 'react-router-dom';

const Configuration=()=> {

    return (
      <header style={{padding: 24}}>

       <div>
       <p style={{color:'#39393b', fontFamily:'CiscoSans', letterSpacing:'.67px', fontWeight: '200px', fontSize:'24px',lineHeight:'30px', marginRight:'34px'}}> Network Configuration </p>
       </div>

       <Gap height={20}/>

       <div className="page3">

        <div>
        <Card style={{ width: 400, border:'1px solid #d7d9d', padding:'20px 24px 24px' }}>
          <p style={{color:'#049fd9', fontSize:'2rem', fontWeight:50}}>Design</p>
          <p style={{color:'#333439', fontSize:'14px'}}>Model your entire network, from sites and buildings to devices and links, both physical and virtual, across campus, branch, WAN and cloud.</p>
          <ul style={{fontSize:'14px', marginLeft:'-23px'}}>
          <Link to="/"><li>Add site locations on the network</li></Link>
          <Link to="/"><li>Designate golden images for device families</li></Link>
          <Link to="/"><li>Create wireless profiles of SSIDs</li></Link>
          </ul>
          <Gap height={70}/>
        </Card>
        </div>

        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

        <div>
        <Card style={{ width: 400,border:'1px solid #d7d9d',padding:'20px 24px 24px' }}>
          <p style={{color:'#049fd9', fontSize:'2rem', fontWeight:50}}>Policy</p>
          <p style={{color:'#333439', fontSize:'14px'}}>Use policies to automate and simplify network management, reducing cost and risk while speeding rollout of new and enhanced services.</p>
           <ul style={{fontSize:'14px', marginLeft:'-23px'}}>
          <Link to="/"><li>Segment your network as Virtual Networks</li></Link>
          <Link to="/"><li>Create scalable groups to describe your critical assets</li></Link>
          <Link to="/"><li>Define segmentation policies to meet your policy goals</li></Link>
          </ul>
          <Gap height={24}/>

        </Card>
        </div>

        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

        <div>
        <Card style={{ width: 400,border:'1px solid #d7d9d',padding:'20px 24px 24px' }}>
           <p style={{color:'#049fd9', fontSize:'2rem', fontWeight:50}}>Provision</p>
          <p style={{color:'#333439', fontSize:'14px'}}>Provide new services to users with ease, speed and security across your enterprise network, regardless of network size and complexity.</p>
           <ul style={{fontSize:'14px', marginLeft:'-23px'}}>
          <Link to="/"><li>Onboard and manage unclaimed devices</li></Link>
          <Link to="/"><li>Add, update or delete devices managed by the controller</li></Link>
          <Link to="/"><li>Provision switches, routes, WLCs and APs in defined site</li></Link>
          <Link to="/"><li>Set up Campus Fabric across switches</li></Link>
          </ul>

        </Card>
        </div>
       </div>
    
       <Gap height={20}/>

       <div className="page3">

        <div>
        <Card style={{ width: 400, border:'1px solid #d7d9d', padding:'20px 24px 24px' }}>
           <p style={{color:'#049fd9', fontSize:'2rem', fontWeight:50}}>Assurance</p>
          <p style={{color:'#333439', fontSize:'14px'}}>Use proactive monitoring and insights from the network, devices, and applications to predict problems faster and ensure that policy and configuration changes achieve the business intent and the user experience you want.</p>
           <ul style={{fontSize:'14px', marginLeft:'-23px'}}>
          <Link to="/"><li>Assurance Health</li></Link>
          <Link to="/"><li>Assurance Issues</li></Link>
          </ul>
        </Card>
        </div>

        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
       </div>

      </header>
        );
      }

  export default Configuration;