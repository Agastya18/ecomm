import {NavLink} from 'react-router-dom'
import {GiShoppingBag,GiShoppingCart} from 'react-icons/gi'
import {PiShoppingCartFill} from 'react-icons/pi'
const Header = () => {
  return (
    <div className="  h-[10vh] flex items-center  shadow-md justify-around ">
      <div className=' flex '>
      <div className=' font-bold'><GiShoppingBag/></div>
        <h1 className="text-2xl font-bold ml-[20%]  " style={{ fontFamily:"Lumanosimo" }}>  
         Logo</h1>
      </div>
        <ul  className=" flex gap-3 font-bold  ml-[20%]   " style={{ fontFamily:"Lumanosimo" }}>
          <li>
          <NavLink to="/" className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">home</NavLink>
          </li>
          <li>
          <NavLink to="/about" className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">about</NavLink>
          </li>
          <li>
          <NavLink to="/contact"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">contact</NavLink>
          </li>
          <li>
          <NavLink to="/register"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">Register</NavLink>
          </li>
          <li>
          <NavLink to="/login"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">Login</NavLink>
          </li>
        </ul>
     
    </div>
  )
}

export default Header