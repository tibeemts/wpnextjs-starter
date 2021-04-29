import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({children}) =>{

    return(
        <div className="container lg:mx-auto bg-white p-3">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}
export default Layout