import Main from '../../layout/Main'
import Hero from './components/Hero'
import ProductSection from './components/MainProducts'
import Features from './components/Feautres'
import RecommendProduction from './components/RecommendProduct'
import SpecialOffer from './components/SpecialOffer'

const Home = () => {
  return (
   <Main>
    <Hero/>
    <ProductSection/>
    <Features/>
    <RecommendProduction/>
    <SpecialOffer/>
   </Main>
  )
}

export default Home