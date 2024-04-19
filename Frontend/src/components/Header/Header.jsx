import {useEffect,useRef} from "react";
import logo from "../../assets/images/car.png";
//import userImg from'../../assets/images/gamer.png'
import {NavLink,Link} from 'react-router-dom'
import {BiMenu} from "react-icons/bi";
const navLinks=[
  {
    path:'/home',
    display:'Home'

  },
  
  {
  path:'/services',
  display:'Services',
  },
  {
    path:'/ find an expert',
    display:'Find an Expert',
  },
  {
    path:'/prediction',
    display:'Prediction',
    },
    {
      path:'/rent a car ',
      display:'Rent a Car ',
      },
 

]






const Header =()=>{

  const headerRef=useRef(null)
  const menuRef=useRef(null)

  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')

      }else{
        headerRef.current.classList.remove('sticky__header')
      }

      
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    return ()=>window.removeEventListener('scroll',handleStickyHeader)
  });
  const toggleMenu=()=>menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
          <img src={logo} alt="Logo" style={{width:'100px',height:'auto'}}/>

          </div>
          {/*menu*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link,index)=><li key={index}>
                  <NavLink to={link.path} className={navClass=>navClass.isActive
                   ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                   : 'text-textColor text-[16px] leading-7 font [500px]'
                   }
                   >
                    {link.display}
                    </NavLink>
                </li>)
              }

            </ul>

          </div>
         {/* nav right */}
           
           <Link to='login'>
            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex
            items-center justify-centre rounded-[50px]">
              Login
            </button>
           </Link>


           <span className="md:hidden" onClick={toggleMenu}> {/*  taa menu ki yebda taille sghir todhher si non todhherch */}
            <BiMenu className="w-6 h-6 cursor-pointer"/>
           </span>
          
        </div>
      </div>
    </header>
  );
};
export default Header;