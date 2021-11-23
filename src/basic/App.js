import Header from './component/Header';
import Footer from './component/Footer'; //component
import Sidebar from './component/Sidebar'

import Layout from './component/Layout'

export default function App() {
    //Ngoai nay la javascript
    return (
        <>{/* comment trong jsx:  Fragment */}
            { <Header name="namnh77" age={20}/>}
            {<Sidebar address="hanoi" /> }
            <Layout>
                <h1> Hello world!</h1>
            </Layout>
            
            {/* <Footer/> */}
        </>
        )
}