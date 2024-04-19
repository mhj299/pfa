import React from 'react'
import heroImg01 from "../assets/images/heroimg1.png";
import heroImg02 from "../assets/images/heroimg2.png";
import heroImg03 from "../assets/images/heroimg3.png";
import icon01 from "../assets/images/expert icon.png";
import {Link} from "react-router-dom";
import {BsArrowRight,} from "react-icons/bs";

const Home = () => {
  return (
  <>
{/* hero section  */}

<section className='hero_section pt-[60px] 2xl:h-[800px]'>
  <div className='container'>
    <div className='flex felx-col lg:flex-row gap-[90px] items-center justify-between'>
      {/* hero content */}
      <div>
        <div className='lg:w-[570px]'>
          <h1 className='text-[36px] leading -[46px] text-headingColor font-[550] md:text-[45px] md:leading-[70px] '>
            We help people to Predict her cars,Rent a Car easily and book an appointment with one of our great Experts.
          </h1>
          <button className='btn'>Request an Appointment</button>
        </div>
        {/** hero_counter */}
        <div className='mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5
        lg:gap-[30px]'>
          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[550] 
            text-headingColor'>
15+
            </h2>
            <span className='w-[60px] h-2 bg-yellowColor rounded-full block mt-[-14px]
        '></span>
        <p className='text__para'>Years of Experience</p>
          </div>
          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[550] 
            text-headingColor'>
10+
            </h2>
            <span className='w-[58px] h-2 bg-purpleColor rounded-full block mt-[-14px]
        '></span>
        <p className='text__para'>Coapartner</p>
          </div>
          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[550] 
            text-headingColor'>
100%
            </h2>
            <span className='w-[80px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]
        '></span>
        <p className='text__para'>Clients Satisfaction</p>
          </div>
        </div>
      </div>
      {/**hero content  */}

      <div className='flex gap-[30px] justify-end'>
        <div>
          <img className='w-full' src={heroImg01} alt=""/>
        
        </div>
      <div className='mt-[30px'>
        <img src={heroImg02}alt="" className='w-full mb-[30px]'/>
        <img src={heroImg03} alt="" className='w-full'/>
        
      </div>
      </div>
      </div> 
      </div>
</section>
{/* hero section end */}
<section>
  <div className='container'>
    <div className='lg:w-[470px] mx-auto'>
      <h2 className='heading text-center'>
        Providing the best car's services
      </h2>
      <p className='text__para text-center'>
        Predict how long your car will last with AI.
         </p>
    </div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
<div className='py-[30px] px-5'>
<div className='flex items-center jsutify-center '>
  <img src={icon01}  alt="" width="200px"/>
</div>

<div className='mt-[30px]'>
<h2 className='text-[26px] leading-9 text-headingColor font-[700] ' > Find an Expert
</h2>
<p className='text-[16px] leading-7 text-textColor font-[400] mt-4 '>
  Auto Care care for all the cars .
  Our System offers an oppointment with one of our great expert.
</p>
<Link 
to="/Experts"
className="w-[44px] h-[44px] rounded-full border borde-solid border-[#181A1E] mt-[10px]
mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
>
  <BsArrowRight className="group-hover: text-bleu w-6 h-5"/> {/*-> sahem kober w so8er mta3ou  */}
</Link>
</div> 
</div>
<div className='py-[30px] px-5'>
<div className='flex items-center jsutify-center '>
  <img src={icon01}  alt="" width="200px"/>
</div>

<div className='mt-[30px]'>
<h2 className='text-[26px] leading-9 text-headingColor font-[700] ' > Rent a Car
</h2>
<p className='text-[16px] leading-7 text-textColor font-[400] mt-4 '>
  Auto Care care for all the cars .
  Our System offers an oppointment with one of our great expert.
</p>
<Link 
to="/Experts"
className="w-[44px] h-[44px] rounded-full border borde-solid border-[#181A1E] mt-[10px]
mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
>
  <BsArrowRight className="group-hover: text-bleu w-6 h-5"/> {/*-> sahem kober w so8er mta3ou  */}
</Link>
</div> 
</div>
<div className='py-[30px] px-5'>
<div className='flex items-center jsutify-center '>
  <img src={icon01}  alt="" width="200px"/>
</div>

<div className='mt-[30px]'>
<h2 className='text-[26px] leading-9 text-headingColor font-[700] ' > Predict a Car
</h2>
<p className='text-[16px] leading-7 text-textColor font-[400] mt-4 '>
  Auto Care care for all the cars .
  Our System offers an oppointment with one of our great expert.
</p>
<Link 
to="/Experts"
className="w-[44px] h-[44px] rounded-full border borde-solid border-[#181A1E] mt-[10px]
mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
>
  <BsArrowRight className="group-hover: text-bleu w-6 h-5"/> {/*-> sahem kober w so8er mta3ou  */}
</Link>
</div> 
</div>
</div>
  </div>
</section>
{/*  about section start*/}

</>
  );
    
};

export default Home;