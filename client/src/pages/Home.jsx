
import Layout from '../components/Layout'
import { useAuth } from '../context/auth'
const Home = () => {
  const {auth, setAuth} = useAuth()
  return (
    <Layout title={"home"} >
      <div className=' bg-red-400 h-[100%]'>
        <pre> {JSON.stringify(auth,null,4)}</pre>
      </div>
    </Layout>
  )
}

export default Home