import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import HeroSection from '../../component/heroSection/HeroSection'
import Category from '../../component/category/Category'
import HomePageProductCard from '../../component/HomePageProductCard/HomePageProductCard'
import Track from '../../component/track/Track'
import Testimonial from '../../component/testimonial/Testimonial'

import Loader from '../../component/loader/Loader'

const HomePage = () => {
  // const context = useContext(myContext);
  // const name = context;
  return (
    <Layout>
      
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
      <Loader/>
      
    </Layout>

  )
}

export default HomePage
  