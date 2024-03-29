import React,{ useState } from "react"
import axios from "axios"
import '../index.css'
import BBB from "../assets/bbb.png"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container md:px-5 sm:px-3 my-24 mx-auto">
          <div className="flex flex-col text-center md:w-1/2 sm:w-100 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-small title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <a href={"tel:5209778343"} className="sm:text-3xl text-4xl font-bold title-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 hover:from-indigo-500 hover:to-indigo-500">
              520 977 8343
            </a>
            <p className="lg:w-full mb-6 mx-auto leading-relaxed text-base text-md">
              Building a new home or remodeling your current one? Enter your informaiton below and we will get back to you as soon as possible.
            </p>
          </div>
          {/*<div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={ev=>{setName(ev.target.value)}}
                    value={name}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={ev=>{setPhone(ev.target.value)}}
                    value={phone}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={ev=>{setEmail(ev.target.value)}}
                    value={email}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={ev=>{setMessage(ev.target.value)}}
                    value={message}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={ev=>{
                  ev.preventDefault()
                  let emailName = name
                  let emailAddress = email
                  let emailMessage = message
                  let emailPhone = phone
                  setName("")
                  setMessage("")
                  setEmail("")
                  setPhone("")
                  axios.post("email",{
                    name: emailName,
                    message: emailMessage,
                    email: emailAddress,
                    phone: emailPhone
                  }).then((response) =>{
                    setName("")
                    setMessage("")
                    setEmail("")
                  })
                }} className="flex mx-auto text-white bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 hover:from-indigo-500 hover:to-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Get Quote
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="leading-normal mb-3">
                  Tucson, AZ 85750
                </p>
                <span className="inline-flex">
                  <a className="text-indigo-500" href="https://www.facebook.com/people/Sonoran-Sunset-Tile-INC/100022668805872/" target="_blank">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-purple-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-pink-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-orange-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
              </div>*/}
        </div>
      </section>
    </div>
  );
}

export default ContactForm
