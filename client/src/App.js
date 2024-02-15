import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax"
import Home from "./pages/Home.js";
import Gallery from "./pages/Gallery.js";

const App = () => {
 return (
   <div className="overflow-hidden mx-auto relative items-center justify-between bg-slate-50 py-1">
    <ParallaxProvider>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/Gallery" element={<Gallery />} />
     </Routes>
    </ParallaxProvider>
     
   </div>
 );
};
 
export default App;
