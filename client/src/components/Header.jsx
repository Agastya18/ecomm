import {NavLink} from 'react-router-dom'
import {GiShoppingBag,GiShoppingCart} from 'react-icons/gi'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'

const Header = () => {
  const [auth ,setAuth] = useAuth()
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:""

    })
    localStorage.removeItem('auth')
    toast.success("Logout successful")
  }
  return (
    <div className="  h-[10vh] flex items-center  shadow-md justify-around ">
      <div className=' flex '>
      <div className=' font-bold'><GiShoppingBag/></div>
        <h1 className="text-2xl font-bold ml-[20%]  " style={{ fontFamily:"Lumanosimo" }}>  
         Logo</h1>
      </div>
        <ul  className=" flex gap-5 font-bold  ml-[20%]   " style={{ fontFamily:"Lumanosimo" }}>
          <li>
          <NavLink to="/" className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">home</NavLink>
          </li>
          <li>
          <NavLink to="/about" className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">about</NavLink>
          </li>
          <li>
          <NavLink to="/contact"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">contact</NavLink>
          </li>
          {
            !auth.user? (<>
              <li>
          <NavLink to="/register"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">Register</NavLink>
          </li>
          <li>
          <NavLink to="/login"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">Login</NavLink>
          </li>
            </>):(<>
              <li>
          <NavLink onClick={handleLogout} to="/login"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">Logout</NavLink>
          </li>
            </>)
          }
          <li>
          <NavLink to="/cart"  className=" hover:text-indigo-600  text-xl active:text-indigo-600 ">Cart(0)</NavLink>
          </li>
        </ul>
     
    </div>
  )
}

export default Header