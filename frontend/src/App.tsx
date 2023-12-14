import './App.css'
import Navbar from './components/navBar'
import FirstSection from './components/firstSection'
import Footer from './components/footer'
import CardSection from './components/cardSection'
import PayoutSection from './components/payoutSection'
import LastSection from './components/lastSection'
import ReasuranceSection from './components/reasuranceSection'
import Example from './components/gTrendSection'
import SubscribeSection from './components/subscribeSection'
import MediaSection from './components/mediaSection'

function App() {

  return (
    <>
    <Navbar />
    <div className='container mx-auto px-4 md:container md:mx-auto pt-10'>

      <FirstSection/>
      <CardSection />
      <Example  />
      <PayoutSection />
      <ReasuranceSection />
      <MediaSection />
      <SubscribeSection />
      
    </div>

    <Footer/>
    </>
  )
}

export default App
