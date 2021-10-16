// import Header from './component/Header';
// import Footer from './component/Footer'; //component
// import Sidebar from './component/Sidebar'

import Layout from './component/Layout'

export default function Home() {
    //Ngoai nay la javascript
    return (
        <>{/* comment trong jsx:  Fragment */}
            {/* <Header name="namnh77" age={20}/> */}
            {/* <Sidebar address="hanoi" /> */}
            <Layout>
                <h1> Home !</h1>
            </Layout>
            
            {/* <Footer/> */}
        </>
        )
}