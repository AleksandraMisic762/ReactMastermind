import Header from './Header'
import Footer from './Footer'
import './style/App.css';


function App({body}) {
    return (
        <div>
            <Header />
            
            {body}

            <Footer />
        </div>
    )
}

export default App;