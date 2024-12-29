import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Ipad from './components/Ipad/Ipad'
import Alert from './components/Alert/Alert'
import Macbook from './components/Macbook/Macbook'
import IPhone from './components/IPhone/IPhone'
import Fourth from './components/Fourth/Fourth'
import Fifth from './components/Fifth/Fifth'
import Sixth from './components/sixth/Sixth'
import Youtube from './components/Youtube/Youtube'

import './Bootstrap.css'
import './App.css'
import './assets/commonJs/jQuery';

function App() {
  return (
    <>
    <Header />
    <Alert />
    <Ipad />
    <Macbook />
    <IPhone />
    <Fourth />
    <Fifth />
    <Sixth />

    <Youtube />

    <Footer />
      
    </>
  )
}

export default App
