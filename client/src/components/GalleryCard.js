import * as React from "react"
import '../index.css'

const ImageCard = (props) => {
    return (
       <div className="max-w-sm h-1/4 rounded overflow-hidden shadow-lg bg-slate-50">
           <div className="px-6 py-4">
             <div className=" mb-2 font-bold text-xl">{props.title}</div>
           </div>
           <div className="px-6 pt-4 pb-2 text-slate-100">
                <button className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 hover:from-indigo-500 hover:to-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 mr-2 mb-2"><p className="text-slate-100">View More Photos</p></button>
           </div>
       </div>
    )}

export default ImageCard