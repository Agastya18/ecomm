import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
import  { Toaster } from 'react-hot-toast';
const Layout = ({children,title}) => {
  return (
    <div>
    <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    

    </Helmet>
     <Header />
    <main className='  h-[80vh]' >
    <Toaster />
      {children}

    </main>
    <Footer/>
    </div>
  )
}

export default Layout
// style={{ minHeight: "70vh" }}