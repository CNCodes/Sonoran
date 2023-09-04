import React, { useState } from 'react';
import '../index.css'
import { useLocation } from 'react-router-dom'; 

import Bathroom01 from "../assets/Bathroom_01.jpg"
import Bathroom02 from "../assets/Bathroom_02.jpg"
import Bathroom03 from "../assets/Bathroom_03.jpg"
import Bathroom04 from "../assets/Bathroom_04.jpg"
import Bathroom05 from "../assets/Bathroom_05.jpeg"
import Bathroom06 from "../assets/Bathroom_06.jpeg"
import Bathroom07 from "../assets/Bathroom_07.jpeg"
import Bathroom08 from "../assets/Bathroom_08.jpeg"
import Bathroom09 from "../assets/Bathroom_09.jpeg"
import Bathroom10 from "../assets/Bathroom_10.jpeg"
import Bathroom11 from "../assets/Bathroom_11.jpeg"
import Bathroom12 from "../assets/Bathroom_12.jpeg"
import Bathroom13 from "../assets/Bathroom_13.jpeg"


import Kitchen01 from "../assets/Backsplash_01.jpg"
import Kitchen02 from "../assets/Kitchen_02.jpg"
import Kitchen03 from "../assets/Kitchen_03.jpg"
import Kitchen04 from "../assets/Kitchen_04.jpeg"
import Kitchen05 from "../assets/Kitchen_05.jpeg"
import Kitchen06 from "../assets/Kitchen_06.jpeg"
import Kitchen07 from "../assets/Kitchen_07.jpeg"
import Kitchen08 from "../assets/Kitchen_08.jpeg"
import Kitchen09 from "../assets/Kitchen_09.jpeg"
import Kitchen10 from "../assets/Kitchen_10.jpeg"
import Kitchen11 from "../assets/Kitchen_11.jpeg"
import Kitchen12 from "../assets/Kitchen_12.jpeg"
import Kitchen13 from "../assets/Kitchen_13.jpeg"

import Floor01 from "../assets/Floor_01.jpg"
import Floor02 from "../assets/Floor_02.jpeg"
import Floor03 from "../assets/Floor_03.jpeg"
import Floor04 from "../assets/Floor_04.jpeg"
import Floor05 from "../assets/Floor_05.jpeg"
import Floor06 from "../assets/Floor_06.jpeg"
import Floor07 from "../assets/Floor_07.jpeg"
import Floor08 from "../assets/Floor_08.jpeg"
import Floor09 from "../assets/Floor_09.jpeg"
import Floor10 from "../assets/Floor_10.jpeg"
import Floor11 from "../assets/Floor_11.jpeg"
import Floor12 from "../assets/Floor_12.jpeg"
import Floor13 from "../assets/Floor_13.jpeg"

import Navbar from "../components/Navbar.js"
import ContactForm from "../components/ContactForm.js"
import ImageCard from "../components/ImageCard.js"
import ImageGallery from 'react-image-gallery';

const floors = [
  {
    original: Floor01,
    thumbnail: Floor01,
  },
  {
    original: Floor02,
    thumbnail: Floor02,
  },
  {
    original: Floor03,
    thumbnail: Floor03,
  },
  {
    original: Floor04,
    thumbnail: Floor04,
  },
  {
    original: Floor05,
    thumbnail: Floor05,
  },
  {
    original: Floor06,
    thumbnail: Floor06,
  },
  {
    original: Floor07,
    thumbnail: Floor07,
  },
  {
    original: Floor08,
    thumbnail: Floor08,
  },
  {
    original: Floor09,
    thumbnail: Floor09,
  },
  {
    original: Floor10,
    thumbnail: Floor10,
  },
  {
    original: Floor11,
    thumbnail: Floor11,
  },
  {
    original: Floor12,
    thumbnail: Floor12,
  },
  {
    original: Floor13,
    thumbnail: Floor13,
  },
];

const kitchens = [
    {
        original: Kitchen01,
        thumbnail: Kitchen01,
    },
    {
      original: Kitchen02,
      thumbnail: Kitchen02,
    },
    {
      original: Kitchen03,
      thumbnail: Kitchen03,
    },
    {
      original: Kitchen04,
      thumbnail: Kitchen04,
    },
    {
      original: Kitchen05,
      thumbnail: Kitchen05,
    },
    {
      original: Kitchen06,
      thumbnail: Kitchen06,
    },
    {
      original: Kitchen07,
      thumbnail: Kitchen07,
    },
    {
      original: Kitchen08,
      thumbnail: Kitchen08,
    },
    {
      original: Kitchen09,
      thumbnail: Kitchen09,
    },
    {
      original: Kitchen10,
      thumbnail: Kitchen10,
    },
    {
      original: Kitchen11,
      thumbnail: Kitchen11,
    },
    {
      original: Kitchen12,
      thumbnail: Kitchen12,
    },
    {
      original: Kitchen13,
      thumbnail: Kitchen13,
    },

  ];

  const bathrooms = [
    {
        original: Bathroom01,
        thumbnail: Bathroom01,
    },
    {
      original: Bathroom02,
      thumbnail: Bathroom02,
    },
    {
      original: Bathroom03,
      thumbnail: Bathroom03,
    },
    {
      original: Bathroom04,
      thumbnail: Bathroom04,
    },
    {
      original: Bathroom05,
      thumbnail: Bathroom05,
    },
    {
      original: Bathroom06,
      thumbnail: Bathroom06,
    },
    {
      original: Bathroom07,
      thumbnail: Bathroom07,
    },
    {
      original: Bathroom08,
      thumbnail: Bathroom08,
    },
    {
      original: Bathroom09,
      thumbnail: Bathroom09,
    },
    {
      original: Bathroom10,
      thumbnail: Bathroom10,
    },
    {
      original: Bathroom11,
      thumbnail: Bathroom11,
    },
    {
      original: Bathroom12,
      thumbnail: Bathroom12,
    },
    {
      original: Bathroom13,
      thumbnail: Bathroom13,
    },
  ];

const Gallery = () => {
    const location = useLocation();
    let [imageList, setImageList] = useState(floors)
    let [count, setCount] = useState(0)
    
    console.log(count, location.state)

    if (location.state == "Floors" && count == 0) {
      console.log("hit")
      setImageList(floors)
      setCount(count += 1)
    } else if (location.state == "Bathrooms" && count == 0) {
      console.log("hit")
      setImageList(bathrooms)
      setCount(count += 1)
    } else if (location.state == "Kitchens" && count == 0){
      console.log("hit")
      setImageList(kitchens)
      setCount(count += 1)
    }
    
    return ( 
        <div>
            <Navbar/>
              <div style={{paddingTop: "2em",paddingBottom: "1em",paddingRight: "2em",paddingLeft: "2em", backgroundColor: "#f0f0f0"}} className="mx-auto lg:w-1/2 sm:w-1 mt-6 bg-slate-200">
                  <ImageGallery items={imageList} />
              </div>
              <br></br>
              <div style={{justifyContent: "center"}} className="container mx-auto flex items-center">
                  <button onClick={() => setImageList(floors)} className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 hover:from-indigo-500 hover:to-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mb-2"><p className="inline-block text-slate-100">Floors</p></button>
                  <button onClick={() => setImageList(kitchens)} className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 hover:from-indigo-500 hover:to-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mb-2"><p className="inline-block text-slate-100">Kitchens</p></button>
                  <button onClick={() => setImageList(bathrooms)} className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 hover:from-indigo-500 hover:to-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mb-2"><p className="inline-block text-slate-100">Bathrooms</p></button>
               </div>
            </div>
    )}

export default Gallery