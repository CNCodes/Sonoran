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
import Bathroom14 from "../assets/Bathroom_14.jpeg"
import Bathroom15 from "../assets/Bathroom_15.jpeg"
import Bathroom16 from "../assets/Bathroom_16.jpeg"
import Bathroom17 from "../assets/Bathroom_17.jpeg"
import Bathroom18 from "../assets/Bathroom_18.jpeg"
import Bathroom19 from "../assets/Bathroom_19.jpeg"
import Bathroom20 from "../assets/Bathroom_20.jpeg"
import Bathroom21 from "../assets/Bathroom_21.jpeg"
import Bathroom22 from "../assets/Bathroom_22.jpeg"
import Bathroom23 from "../assets/Bathroom_23.jpeg"
import Bathroom24 from "../assets/Bathroom_24.jpeg"
import Bathroom25 from "../assets/Bathroom_25.jpeg"
import Bathroom26 from "../assets/Bathroom_26.jpeg"
import Bathroom27 from "../assets/Bathroom_27.jpeg"
import Bathroom28 from "../assets/Bathroom_28.jpeg"
import Bathroom29 from "../assets/Bathroom_29.jpeg"
import Bathroom30 from "../assets/Bathroom_30.jpeg"


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
import Kitchen14 from "../assets/Kitchen_14.jpeg"
import Kitchen15 from "../assets/Kitchen_15.jpeg"
import Kitchen16 from "../assets/Kitchen_16.jpeg"
import Kitchen17 from "../assets/Kitchen_17.jpeg"


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
import Floor14 from "../assets/Floor_14.jpeg"
import Floor15 from "../assets/Floor_15.jpeg"

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
  {
    original: Floor14,
    thumbnail: Floor14,
  },
  {
    original: Floor15,
    thumbnail: Floor15,
  }
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
    {
      original: Kitchen14,
      thumbnail: Kitchen14,
    },
    {
      original: Kitchen15,
      thumbnail: Kitchen15,
    },
    {
      original: Kitchen16,
      thumbnail: Kitchen16,
    },
    {
      original: Kitchen17,
      thumbnail: Kitchen17,
    }

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
    {
      original: Bathroom14,
      thumbnail: Bathroom14,
    },
    {
      original: Bathroom15,
      thumbnail: Bathroom15,
    },
    {
      original: Bathroom16,
      thumbnail: Bathroom16,
    },
    {
      original: Bathroom17,
      thumbnail: Bathroom17,
    },
    {
      original: Bathroom18,
      thumbnail: Bathroom18,
    },
    {
      original: Bathroom19,
      thumbnail: Bathroom19,
    },
    {
      original: Bathroom20,
      thumbnail: Bathroom20,
    },
    {
      original: Bathroom21,
      thumbnail: Bathroom21,
    },
    {
      original: Bathroom22,
      thumbnail: Bathroom22,
    },
    {
      original: Bathroom23,
      thumbnail: Bathroom23,
    },
    {
      original: Bathroom24,
      thumbnail: Bathroom24,
    },
    {
      original: Bathroom25,
      thumbnail: Bathroom25,
    },
    {
      original: Bathroom26,
      thumbnail: Bathroom26,
    },
    {
      original: Bathroom27,
      thumbnail: Bathroom27,
    },
    {
      original: Bathroom28,
      thumbnail: Bathroom28,
    },
    {
      original: Bathroom29,
      thumbnail: Bathroom29,
    },
    {
      original: Bathroom30,
      thumbnail: Bathroom30,
    }
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
