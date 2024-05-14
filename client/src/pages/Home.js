import React, {useEffect, useState} from "react";
import '../index.css'

import Bathroom01 from "../assets/Bathroom_01.jpg"
import Kitchen03 from "../assets/Kitchen_03.jpg"
import Floor01 from "../assets/Floor_01.jpg"

import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax"
import ImageCard from "../components/ImageCard.js"
import Navbar from "../components/Navbar.js"
import ContactForm from "../components/ContactForm.js"



const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }
   
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}

const Home = () => {
  
    return (
      <div>
        <Navbar/>
        <div>
          <ParallaxBanner
            style={useCheckMobileScreen ? {height:"55vh", borderRadius:"5px"}:{height:"75vh", borderRadius:"5px"}}
            layers={[
              { image: "https://www.compass.com/m/23cef20adc977b0ce9a21e729b55e85f3b68b4ad_img_0_96aa6/origin.jpg", speed: 50},
            ]}
          >
            <div style={{position:"absolute",marginTop:"33%",marginLeft:"25%"}} class="sm:w-full">
              <h1 className="text-3xl text-white font-extrabold  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  lg:text-5xl" style={{fontWeight:"bolder"}}>Sonoran Sunset Tile</h1>
              <br/> 
              <p className="text-xl text-white bg-clip-text bg-gradient-to-b from-purple-800 to-purple-600 text-center" style={{fontWeight:"bolder"}}>High Quality Installations in the Desert for over 25 Years.</p>
            </div>
          </ParallaxBanner>
          <br/>
          <div className="h-px mx-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div><br/>
          <div className="w-11/12 mx-auto md:ml-24 lg:columns-2 sm:columns-1 sm:mb-15 justify-center">
          <h1 className="text-3xl text-center lg:text-5xl lg:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style={{fontWeight:"bolder"}}>A Cut Above the Rest</h1>
              <p className="md:w-3/4 text-center text-transparent lg:text-left bg-clip-text bg-gradient-to-b from-indigo-800 via-purple-600 via-purple-500 to-orange-500" style={{fontWeight:"bolder"}}>Not all tile is set the same. And not all tile companies work the same. At Sonoran Sunset Tile, we strive to bring the best service possible to your home. Whether it’s complicated designs, speed of work, or quality of the final product, at Sonoran Sunset Tile we focus on making your experience the best possible. </p>
              
          <h1 className="text-3xl text-center lg:text-5xl lg:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style={{fontWeight:"bolder"}}>Over 35 Years of Experience</h1>
              <p className="md:w-3/4 text-center text-transparent lg:text-left bg-clip-text bg-gradient-to-b from-indigo-800 via-purple-600 via-purple-500 to-orange-500" style={{fontWeight:"bolder"}}>Founded in 1994, At Sonoran Sunset Tile, We are proud to share our over 25 years of expertese so you can make the most informed decision when your are deciding on flooring. Whether it is a new home, or remodeling your current residence. We are here to help. </p>
              </div>
        <br/>
        <div className="h-px mx-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <br/>
        <div id="ourWork" className="md:ml-12 md:columns-3 columns-1  justify-center">
            <ImageCard
                imageURL={Floor01}
                title={"Floors"}
                pContent={"Tile floors are one of the best solutions to decorating your home. Instead of carpet, which is mostly made of synthetic fibers that can be harmful to both the natural enviornment via manufacturing and your home environment by trapping particulates and worsen your air quality indoors. Its also built to last and is easy to clean. Check out some of our designs below"}/>
            <ImageCard
                imageURL={Bathroom01}
                title={"Bathrooms"}
                pContent={"Tile is the natural solution to make your bathrooms beautiful. On top of tile being one of the best waterproofing surfaces around, we make sure our bathrooms and showers are properly sealed so 10 years down the line, your product is as good as the day it was set. Check out some of our showers, bathrooms and tub surrounds below"}/>
              <ImageCard
                imageURL={Kitchen03}
                title={"Kitchens"}
                pContent={"Easy to clean, water resistant, and made for high traffic, tile is a great solution when designing your kitchen. Stay away from hardwood flooring and sleep with peace of mind knowing a leak won’t destroy your kitchen floors. Not only that, but adding a kitchen backsplash can compliment your floors and appliances while at the same time adding a protective layer for moisture and an easy to clean surface for your walls. Check out some of our work below."}/>
        </div>
        </div>
        <ContactForm/>
        </div>
    )}

export default Home
