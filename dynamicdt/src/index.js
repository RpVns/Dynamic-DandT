import react from 'react';
import reactDOM from 'react-dom';
import './index.css';
var fname="Rajat";
var lname="Patel";
var dt=new Date().toLocaleDateString();
var time=new Date().toLocaleTimeString();
reactDOM.render(<>
<h1 className='h1'>Hello, My Name Is Rajat Patel</h1>
<p>Date:{dt}</p>
<p>Time:{time}</p>
</>,
document.getElementById('root'));