import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout(props) {
    return (
        <>{/* comment trong jsx:  Fragment */}
            <Header/>
            <Sidebar />
            <div>
                {props.children}
            </div>
            <Footer/>
        </>
        )
}