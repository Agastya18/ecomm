
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
const PageNot = () => {
  return (
   <Layout title={"page not found"}>
    <div  className=' flex flex-col  justify-center items-center h-[80%] gap-10 '>
      <h1 className=' text-red-600  text-8xl font-bold' style={{ fontFamily:"Lobster" }}>404</h1>
      <h2 className=' text-xl font-bold'>OOPS! Page Not Found</h2>
      <Link to = "/" className=' font-semibold  bg-blue-400 rounded-full p-3'>Go back</Link>
    </div>
   </Layout>
  )
}

export default PageNot