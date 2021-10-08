import React, { useEffect, useState } from 'react';
import './Assurance.css';
import { Card} from 'antd';
import Gap from '../Gap/Gap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Assurance=()=> {

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "Oct", "November", "December"
];

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

const [datas, setDatas] = useState([]);

useEffect(() => {
    axios.get('http://192.168.254.149:3002/month').then(res => {
        console.log(res.data.lwbpValue[0].last_runtime)  
        setDatas(res.data.lwbpValue[0].last_runtime) 
    });
}, []);



return (
<header style={{padding: 24}}>
 <div><p style={{color:'#39393b', fontFamily:'CiscoSans', letterSpacing:'.67px', fontWeight: '200px', fontSize:'24px',lineHeight:'30px', marginRight:'34px'}}> Assurance Summary </p></div>
 <Gap height={5}/>
 <div className="page1">
  <div>
  <Card style={{ width: 600, border:'1px solid #d7d9d'}}>
    <p style={{fontSize:'18px', fontWeight:'bold', color:'#626469',letterSpacing: '1px'}}> Health</p>
    <p style={{fontSize:'12px', fontWeight:'bold', color:'#626469',letterSpacing: '.5px'}}>Healthy as of 
          { currentDateTime }
          { currentTime }
        </p>

        <div className="page1">
        <div style ={{textAlign:'center', marginLeft:40}}>
        <Link to="/" style ={{display:'flex'}}><div style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}>
          100</div><p style ={{marginTop:50}}>&nbsp; %</p>
        </Link>
        <p>Network Devices</p>
        </div>

        <div style ={{textAlign:'center', marginLeft:40}}>
        <Link to="/" style ={{display:'flex'}}><div style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}>
          {datas}</div><p style ={{marginTop:50}}>&nbsp; %</p>
        </Link>
        <p>Wireless Clients</p>
        </div>

        <div style ={{textAlign:'center', marginLeft:40}}>
        <Link to="/" style ={{display:'flex'}}><div style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}>
          100</div><p style ={{marginTop:50}}>&nbsp; %</p>
        </Link>
        
        <Gap height={5}/>
        <p>Wired Clients</p>
        </div>
        </div>

    <p className="footer"><Link to="/">View Details</Link></p>
  </Card>
  </div>

  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

  <div>
  <Card style={{ width: 600,border:'1px solid #d7d9d'}}>
  <p style={{fontSize:'18px', fontWeight:'bold', color:'#626469',letterSpacing: '1px'}}> Critical Issues</p>
    <p style={{fontSize:'12px', fontWeight:'bold', color:'#626469',letterSpacing: '.5px'}}>Last 24 Hours</p> 
    
    <div className="page1">
        <div style ={{textAlign:'center', marginLeft:100}}>
        <Link to="/" style ={{display:'flex'}}><div style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}>
          0</div>
        </Link>
        <p>P1</p>
        </div>

        <div style ={{textAlign:'center', marginLeft:250}}>
        <Link to="/" style ={{display:'flex'}}><div style ={{color:'#0096d6', fontSize:62, textAlign:'center'}}>
          0</div>
        </Link>
        
        <Gap height={5}/>
        <p>P2</p>
        </div>
        </div>

    <p className="footer"><Link to="/">View Details</Link></p>
  </Card>
  </div>
 </div>
</header>
  );
}

export default Assurance;
