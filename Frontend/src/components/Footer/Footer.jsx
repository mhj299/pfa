import React from 'react';
import {Link} from 'react-router-dom';
import  logo from '../../assets/images/car.png';
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'

const socialLinks=[
  {
    path:"https://www.youtube.com/account",
    icon:<AiFillYoutube className="group-hover:text-white w-4 h-5"/>,

  },
  {
    path:"https://github.com/mhj299/pfa",
    icon:<AiFillGithub className="group-hover:text-white w-4 h-5"/>,

  },
  {
    path:"https://www.instagram.com/",
    icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>,

  },
  {
    path:"https://www.linkedin.com/feed/",
    icon:<RiLinkedinFill className="group-hover:text-white w-4 h-5"/>,

  },
];
const quikLinks01=[
{
  path:"/home",
  display:"Home",
},
{
  path:"/services",
  display:"Services",
},
{
  path:"/",
  display:"Blog",
},
];
const quikLinks02=[
  {
    path:"/find-an-expert",
   display:"Find an Expert",
  },
  {
    path:"/",
    display:"Request an Appointment",
  },
  {
    path:"/",
    display:"predict a car",
  },
  {
      path:"/",
      display:"Get a Opinion",
},
];
const quikLinks03=[
{
  path:"/",
  display:"Donate",

},
{
path:"/",
display:"Contact Us",
},
];

 
 
 const Footer =()=> {
   const year= new Date(). getFullYear();
   return (
  <center>
   <footer className='pb-16 pt-10'  >
    <center>
     <div className='container' >
      <div>
       <div>
        <img src={logo} alt="" style={{width:'100px',height:'auto'}}
/>
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
            Copyright {year} developped by Dreams and Nada all right reserved</p>
   
    
      
        
        </div>
       </div>
      </div>
      </center>
     </footer>
 </center>
     
   );
 }; 
 
 export default Footer;




