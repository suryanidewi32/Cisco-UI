import './Network.css';
import { Card} from 'antd';
import Gap from '../Gap/Gap';
import { Link } from 'react-router-dom';

const Network=()=> {

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oct", "November", "December"];

const today = new Date(),
date =  ' ' +monthNames[today.getMonth()] + ' ' + today.getDate() +  ', '   + ' ' + today.getFullYear() + ' ';

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const currentTime = formatAMPM(today);

const currentDateTime = date;

  return (
  <header style={{padding: 24}}>

   <div>
     <p style={{color:'#39393b', fontFamily:'CiscoSans', letterSpacing:'.67px', fontWeight: '200px', fontSize:'24px',lineHeight:'30px', marginRight:'34px'}}> Network Snapshot </p>
   </div>

   <Gap height={20}/>

   <div className="page1">
    
    <div>
    <Card style={{ width: 400, border:'1px solid #d7d9d'}}>
    <p style={{fontSize:'18px', fontWeight:'bold', color:'#626469',letterSpacing: '1px'}}> Sites</p>
    <p style={{fontSize:'12px', fontWeight:'bold', color:'#626469',letterSpacing: '.5px'}}>As of 
    { currentDateTime }
    { currentTime }</p>
    <div className="page1">
    <p style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}><Link to="/">213</Link></p>
    <div style={{marginLeft:150}}>
    <br></br>
    <p style={{color:'#626469',textAlign:'center'}}> DNS Servers : 
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">1</Link>
    </p>
    <p style={{color:'#626469',textAlign:'center'}}> NTP Servers :
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">0</Link>
    </p>
    </div>
    </div>
    <p className="footer"><Link to="/">View Sites</Link></p>
    </Card>
    </div>

    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

    <div>
    <Card style={{ width: 400,border:'1px solid #d7d9d'}}>
    <p style={{fontSize:'18px', fontWeight:'bold', color:'#626469',letterSpacing: '1px'}}> Network Devices</p>
    <p style={{fontSize:'12px', fontWeight:'bold', color:'#626469',letterSpacing: '.5px'}}>As of 
    { currentDateTime }
    { currentTime }
    </p>
    <div className="page1">
    <p style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}><Link to="/">16</Link></p>
    <div style={{marginLeft:150}}>
    <br></br>
    <p style={{color:'#626469'}}> Unclaimed    &nbsp; &nbsp; &nbsp; &nbsp;:
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">32</Link>
    </p>
    <p style={{color:'#626469'}}> Unprovisioned  &nbsp;:
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">15</Link>
    </p>
    <p style={{color:'#626469'}}> Unreachable   &nbsp; &nbsp;&nbsp;:
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">2</Link>
    </p>
    </div>
    </div>
      <p className="footer"><Link to="/">Find New Devices</Link></p>
    </Card>
    </div>

    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

    <div>
    <Card style={{ width: 400,border:'1px solid #d7d9d'}}>
    <p style={{fontSize:'18px', fontWeight:'bold', color:'#626469',letterSpacing: '1px'}}> Network Profiles</p>
    <p style={{fontSize:'12px', fontWeight:'bold', color:'#626469',letterSpacing: '.5px'}}>As of 
    { currentDateTime }
    { currentTime }
    </p>
    <div className="page1">
    <p style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}><Link to="/">1</Link></p>
    </div>
    <p className="footer"><Link to="/">Manage Profiles</Link></p>
    </Card>
    </div>
    </div>

    <Gap height={20}/>

    <div className="page1">

    <div>
    <Card style={{ width: 400, border:'1px solid #d7d9d'}}>
    <p style={{fontSize:'18px', fontWeight:'bold', color:'#626469',letterSpacing: '1px'}}> Images</p>
    <p style={{fontSize:'12px', fontWeight:'bold', color:'#626469',letterSpacing: '.5px'}}>As of 
    { currentDateTime }
    { currentTime }
    </p>
    <div className="page1">
    <p style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}><Link to="/">2</Link></p>
    <div style={{marginLeft:150}}>
    <br></br>
    <p style={{color:'#626469'}}>Untagged Images :
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">0</Link>
    </p>
    <p style={{color:'#626469'}}>Unverified Images :
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">0</Link>
    </p>
    </div>
    </div>
    <p className="footer"><Link to="/">View Images/SMUs</Link></p>
    </Card>
    </div>

    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    
    <div>
    <Card style={{ width: 400,border:'1px solid #d7d9d'}}>
    <p style={{fontSize:'18px', fontWeight:'bold', color:'#626469',letterSpacing: '1px'}}> Cisco DNA Licensed Devices</p>
    <p style={{fontSize:'12px', fontWeight:'bold', color:'#626469',letterSpacing: '.5px'}}> As of 
    { currentDateTime }
    { currentTime }
    </p>
    <div className="page1">
    <p style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}>1</p>
    <div style={{marginLeft:200}}>
    <br></br>
    <p style={{color:'#626469'}}> Switches  &nbsp;:
    &nbsp;
    <Link style ={{color:'#6cc04a'}} to="/">2</Link>
    </p>
    <p style={{color:'#626469'}}> Routers      &nbsp;&nbsp;:
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">0</Link>
    </p>
    <p style={{color:'#626469'}}> Wireless   &nbsp;:
    &nbsp;
    <Link style ={{color:'#0096d6' }} to="/">0</Link>
    </p>
    </div>
    </div>
    <p className="footer"><Link to="/">Manage Licenses</Link></p>
    </Card>
    </div>
    </div>

    </header>
    );
  }
  
  export default Network;